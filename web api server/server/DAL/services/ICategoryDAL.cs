using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.services
{
    public interface ICategoryDAL
    {
        public List<Category> GetAll();
        public bool Add(Category category);
        public bool Update(Category category, int id);
        public bool Delete(int id);
    }
}
