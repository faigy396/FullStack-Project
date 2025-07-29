using DAL.Models;
using DAL.services;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.classes
{
    public class ShoppingDetailsDAL : IShoppingDetailsDAL
    {
        FaigySegal_Shop_2025Context DB=new FaigySegal_Shop_2025Context();
        public bool Add(ShoppingDetail sd)
        {
            try
            {
                DB.ShoppingDetails.Add(sd);
                DB.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public List<ShoppingDetail> GetAll()
        {
            return DB.ShoppingDetails.Include(o=>o.GameNavigation).ToList();
        }
    }
}
