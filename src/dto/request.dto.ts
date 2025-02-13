import { Transform, Type } from "class-transformer";
import { IsString } from "class-validator";
import { FileStorageSerializable } from "src/common/service/file-storage.service";
import { SexType } from "src/common/types/enum.types";

export class UserData implements FileStorageSerializable {
    sex: SexType;
    username: string;

    toString(): string {
        return `${this.sex} ${this.username.replaceAll('_', ' ')}`;
    }
}

export class AcceptInviteRequest extends UserData implements FileStorageSerializable {
}

export class EatPreferencesRequest implements FileStorageSerializable {
    @Type(() => UserData)
    user: UserData;

    food: string[];

    @Transform(({value}) => value ? value.trim() : null)
    foodCustom: string;

    drinks: string[];

    @Transform(({value}) => value ? value.trim() : null)
    drinksCustom: string;

    toString(): string {
        const data: any = {
            user: this.user.toString()
        };

        if (this.food?.length) {
            data.food = this.food;
        }

        if (this.foodCustom) {
            data.foodCustom = this.foodCustom;
        }

        if (this.drinks?.length) {
            data.drinks = this.drinks;
        }

        if (this.drinksCustom) {
            data.drinksCustom = this.drinksCustom;
        }

        return `${JSON.stringify(data)}`;
    }
}
