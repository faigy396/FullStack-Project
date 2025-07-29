using DAL.Models;
using DAL.services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.classes
{
    public class ShoppingDAL : IShoppingDAL
    {
        FaigySegal_Shop_2025Context DB=new FaigySegal_Shop_2025Context();
        public bool Add(Shopping shopping)
        {
            try
            {
                DB.Shoppings.Add(shopping);
                DB.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public List<Shopping> GetAll()
        {
            return DB.Shoppings.ToList();
        }
    }
}
