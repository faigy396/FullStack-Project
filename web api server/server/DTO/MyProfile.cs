using AutoMapper;
using DAL.classes;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace DTO
{
    public class MyProfile : Profile
    {
        public MyProfile()
        {
            //Category
            CreateMap<Category, CategoryDTO>();
            CreateMap<CategoryDTO, Category>();
            //Game
            CreateMap<Game, GameDTO>().ForMember(x => x.CategoryName, y => y.
            MapFrom(z => z.Category.Name)).
            ForMember(w => w.Barcode, g => g.
            MapFrom(m => "729112" + m.CategoryId + m.Id));
            CreateMap<GameDTO, Game>();
            //Customer
            CreateMap<Customer, CustomerDTO>();
            CreateMap<CustomerDTO, Customer>();

            CreateMap<Shopping, ShoppingDTO>();
            CreateMap<ShoppingDTO, Shopping>();

            CreateMap<ShoppingDetail, ShoppingDetailsDTO>().ForMember(x => x.GameName, y => y.
            MapFrom(z => z.GameNavigation.Name));
            CreateMap<ShoppingDetailsDTO, ShoppingDetail>();
        }
    }
}
