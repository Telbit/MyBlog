using MyBlog.Models;
using MyBlog.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyBlog.Services
{
    public interface IUserService
    {
        Task<UserManagerResponse> LoginUserAsync(LoginViewModel model);
    }
}
