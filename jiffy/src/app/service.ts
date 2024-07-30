import { ServiceType } from "./serviceType";

export interface Service{
    id: number;
    title: string;
    serviceTypeId: number;
    serviceType: ServiceType;
    description: string;
    author: string;
    publishDate: Date;
}