using MyBlog.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyBlog.Data.Repository
{
    public class Repository : IRepository
    {
        private AppDBContext _context;

        public Repository(AppDBContext context)
        {
            _context = context;
        }

        public void AddPost(Post post)
        {
            _context.Posts.Add(post);
        }

        public List<Post> GetAllPosts()
        {
            return _context.Posts.ToList();
        }

        public Post GetPost(int id)
        {
            return _context.Posts.FirstOrDefault(post => post.Id == id);
        }

        public void RemovePost(int id)
        {
            _context.Posts.Remove(GetPost(id));
        }

        public void UpdatePost(Post post)
        {
            _context.Posts.Update(post);
        }

        public async Task<bool> SaveChangesAsync()
        {
            if (await _context.SaveChangesAsync() > 0)
            {
                return true;
            }
            return false;
        }
    }
}
