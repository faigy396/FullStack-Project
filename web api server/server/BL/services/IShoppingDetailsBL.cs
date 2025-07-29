using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.services
{
    public interface IShoppingDetailsBL
    {
        public bool Add(int id, List<ShoppingCartDTO> cart);
        public List<ShoppingDetailsDTO> GetAll();
    }
}
