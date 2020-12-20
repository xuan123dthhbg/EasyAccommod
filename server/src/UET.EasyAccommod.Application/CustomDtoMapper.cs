﻿using AutoMapper;
using UET.EasyAccommod.MasterTable;
using UET.EasyAccommod.MasterTable.ApartmentType.Dto;
using UET.EasyAccommod.MasterTable.BathroomType.Dto;
using UET.EasyAccommod.MasterTable.District.Dto;
using UET.EasyAccommod.MasterTable.KitchenType.Dto;
using UET.EasyAccommod.MasterTable.Province.Dto;
using UET.EasyAccommod.MasterTable.PublicPlaceType.Dto;
using UET.EasyAccommod.MasterTable.TimeShown.Dto;
using UET.EasyAccommod.MasterTable.UnitPrice.Dto;
using UET.EasyAccommod.Sales;
using UET.EasyAccommod.Sales.Dto.Create.Apartment;

namespace UET.EasyAccommod
{
    internal static class CustomDtoMapper
    {
        public static void CreateMappings(IMapperConfigurationExpression configuration)
        {
            configuration.CreateMap<ApartmentCreateInput, Apartment>();
            configuration.CreateMap<ApartmentImageCreateInput, ApartmentImage>();
            configuration.CreateMap<ApartmentPublicPlaceCreateInput, ApartmentPublicPlace>();
            configuration.CreateMap<MstProvince, MstProvinceDto>();
            configuration.CreateMap<MstDistrict, MstDistrictDto>();
            configuration.CreateMap<MstApartmentType, MstApartmentTypeDto>();
            configuration.CreateMap<MstBathroomType, MstBathroomTypeDto>();
            configuration.CreateMap<MstKitchenType, MstKitchenTypeDto>();
            configuration.CreateMap<MstTypePublicPlaceType, MstPublicPlaceTypeDto>();
            configuration.CreateMap<MstSleTimeShown, MstTimeShownDto>();
            configuration.CreateMap<MstUnitPrice, MstUnitPriceDto>();
        }
    }
}