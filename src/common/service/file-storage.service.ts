import { Inject, Injectable, Logger, OnModuleInit, Provider } from '@nestjs/common';
import { Mutex } from 'async-mutex';
import { PathLike } from 'node:fs';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';

export const createUniqueFileStorageProvider = (fileName: string): Provider => ({
    provide: `FILE_STORAGE_${fileName}`, // Уникальный идентификатор для каждого экземпляра
    useValue: new UniqueFileStorageService(fileName),
});

const ENCODING = 'utf-8';

@Injectable()
export class UniqueFileStorageService implements OnModuleInit {
    private readonly logger = new Logger(UniqueFileStorageService.name);

    private readonly data = new Set<string>();

    private readonly dataDir: string;

    private readonly mutex = new Mutex(); // Мьютекс для синхронизации

    constructor(private readonly fileName: string) {
        this.dataDir = path.join(__dirname, '..', '..', '..', 'storage');
    }

    async onModuleInit() {
        await this.loadData(); // Загружаем данные при запуске приложения
    }

    // Загрузка данных из файла
    private async loadData() {
        await this.softCreateStorage();

        try {
            const fileContent = await fs.readFile(this.filePath, ENCODING);
            fileContent
                .split('\n')
                .filter((line) => line.trim() !== '')
                .forEach(dataLine => this.data.add(dataLine));
        } catch (error) {
            throw new Error('Cannot read file in storage');
        }
    }

    private get filePath(): PathLike {
        return path.join(this.dataDir, this.fileName);
    }

    private async softCreateStorage() {
        try {
            await fs.access(this.filePath);

            this.logger.log(`Storage ${this.filePath} exists`);
        } catch (error) {
            await this.createStorage();
        }
    }

    private async createStorage() {
        try {
            try {
                await fs.access(this.dataDir);
            } catch (error) {
                await fs.mkdir(this.dataDir, { recursive: false });
            }

            const fh = await fs.open(this.filePath, 'a');
            await fh.close();

            this.logger.log(`Storage ${this.filePath} created`);
        } catch (error) {
            throw new Error(`Cannot create Storage: ${this.filePath}`);
        }
    }

    // Добавление новой строки
    async addData(newLine: string): Promise<void> {
        if (this.data.has(newLine)) {
            return;
        }

        const release = await this.mutex.acquire(); // Захватываем мьютекс
        
        try {
            await fs.access(this.filePath);
        } catch (error) {
             // Если вдруг удалилось, то грузим из оперативки, если есть данные
             this.logger.warn(`Storage ${this.filePath} has been deleted, restoring`);

             await this.restoreData();
 
             this.logger.warn(`Storage ${this.filePath} data restored`);
        }

        try {
            await fs.appendFile(this.filePath, `${newLine}\n`, { encoding: ENCODING });
            this.data.add(newLine);
        } catch (error) {
            throw new Error('Cannot append to file in storage');
        } finally {
            release(); // Освобождаем мьютекс
        }
    }

    private async restoreData() {
        await this.createStorage();

        if (!this.data.size) {
            this.logger.warn(`Storage ${this.filePath} file restored`);

            return;
        }

        const fh = await fs.open(this.filePath, 'a');

        this.data.forEach(newLine => {
            fh.appendFile(`${newLine}\n`, { encoding: ENCODING });
        });

        await fh.close();
    }

    // Получение всех данных
    public getData(): Set<string> {
        return this.data;
    }

    public has(value: string): boolean {
        return this.data.has(value);
    }
}

export interface FileStorageSerializable {
    toString(): string;
}
