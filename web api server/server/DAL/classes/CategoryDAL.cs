using DAL.Models;
using DAL.services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.classes
{
    public class CategoryDAL : ICategoryDAL
    {
        FaigySegal_Shop_2025Context DB = new();
        public bool Add(Category category)
        {
            try
            {
                DB.Categories.Add(category);
                DB.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public bool Delete(int id)
        {
            try
            {
                Category c=DB.Categories.FirstOrDefault(o=>o.Id == id);
                DB.Categories.Remove(c);
                DB.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public List<Category> GetAll()
        {
            return DB.Categories.ToList();
        }

        public bool Update(Category category, int id)
        {
            try
            {
                DB.Categories.FirstOrDefault(o=>o.Id==id).Name=category.Name;
                DB.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}
