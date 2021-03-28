using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyBlog.Data;
using MyBlog.Data.Repository;
using MyBlog.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyBlog.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private IRepository _repo;

        public PostController(IRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IEnumerable<Post> GetAll()
        {
            var posts = _repo.GetAllPosts();
            return posts;
        }

        [HttpGet("{id}")]
        public ActionResult<Post> GetPost(int id)
        {
            var post = _repo.GetPost(id);
            return post;
        }

        [HttpPost("edit")]
        public async Task<ActionResult<bool>> Edit(Post post)
        {
            _repo.AddPost(post);
            return await _repo.SaveChangesAsync();
        }
    }
}
