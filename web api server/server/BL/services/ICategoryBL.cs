using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.services
{
    public interface ICategoryBL
    {
        public List<CategoryDTO> GetAll();
        public CategoryDTO GetByID(int id);
        public bool Add(CategoryDTO categoryDTO);
        public bool Update(CategoryDTO categoryDTO, int id);
        public bool Delete(int id);
    }
}
