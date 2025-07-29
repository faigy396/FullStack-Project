using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.services
{
    public interface IShoppingDetailsDAL
    {
        public bool Add(ShoppingDetail sd);
        public List<ShoppingDetail> GetAll();
    }
}
