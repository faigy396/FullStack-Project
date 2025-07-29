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
    public class CustomerBL : ICustomerBL
    {
        IMapper mapper;
        ICustomerDAL icd;
        public CustomerBL(ICustomerDAL icd)
        {
            this.icd = icd;
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<MyProfile>();
            });
            mapper = config.CreateMapper();
        }
        public bool Add(CustomerDTO customer)
        {
            Customer c=mapper.Map<CustomerDTO, Customer>(customer);
            return icd.Add(c);
        }

        public List<CustomerDTO> GetAll()
        {
            return mapper.Map<List<Customer>, List<CustomerDTO>>(icd.GetAll());
        }

        public bool IsExist(string name, string pass)
        {
            List<CustomerDTO> customers = mapper.Map<List<Customer>, List<CustomerDTO>>(icd.GetAll());
            for(int i = 0; i < customers.Count; i++)
            {
                if (customers[i].CustName == name && customers[i].Pass==pass)
                    return true;
            }
            return false;
        }
    }
}
