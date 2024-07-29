import { ServiceType } from "./serviceType";

export interface Service{
    id: number;
    title: string;
    serviceTypeId: number;
    serviceType: ServiceType;
    time: string;
    description: string;
    author: string;
    publishDate: string;
}