using AutoMapper;
using BL.services;
using DAL.Models;
using DAL.services;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.classes
{
    public class ShoppingBL : IShoppingBL
    {
        IMapper mapper;
        IShoppingDAL isd;
        public ShoppingBL(IShoppingDAL isd)
        {
            this.isd = isd;
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<MyProfile>();
            });
            mapper = config.CreateMapper();
        }

        public List<ShoppingDTO> GetAll()
        {
            return mapper.Map<List<Shopping>, List<ShoppingDTO>>(isd.GetAll());
        }

        public int SaveShopping(ShoppingDTO s)
        {
            s.SDate = DateTime.Today;
            Shopping s1 = mapper.Map<ShoppingDTO, Shopping>(s);
            isd.Add(s1);
            return s1.Id;
        }
    }
}
