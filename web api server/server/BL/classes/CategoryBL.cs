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
    public class CategoryBL : ICategoryBL
    {
        IMapper imapper;
        ICategoryDAL icd;
        public CategoryBL(ICategoryDAL icd)
        {
            this.icd = icd;
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<MyProfile>();
            });
            imapper = config.CreateMapper();
        }
        
        public bool Add(CategoryDTO item)
        {
            Category category = imapper.Map<CategoryDTO, Category>(item);
            return icd.Add(category);
        }

        public bool Delete(int id)
        {
            return icd.Delete(id);
        }

        public List<CategoryDTO> GetAll()
        {
            return imapper.Map<List<Category>, List<CategoryDTO>>(icd.GetAll());
        }

        public CategoryDTO GetByID(int id)
        {
           return imapper.Map<List<Category>, List<CategoryDTO>>(icd.GetAll()).FirstOrDefault(o => o.Id == id);
        }

        public bool Update(CategoryDTO item, int id)
        {
            Category c=imapper.Map<CategoryDTO, Category>(item);
            return icd.Update(c, id);
        }
    }
}
