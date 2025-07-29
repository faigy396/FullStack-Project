using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.services
{
    public interface IShoppingBL
    {
        public int SaveShopping(ShoppingDTO s);
        public List<ShoppingDTO> GetAll();
    }
}
