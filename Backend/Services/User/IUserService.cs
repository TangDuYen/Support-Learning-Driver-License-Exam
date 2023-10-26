﻿using Backend.DTO.Users;
using Backend.Services;

namespace Backend.Services.User
{
    public interface IUserService
    {
        public ICollection<UserDTO>? GetUsers();
        Task<ServiceResult<UserDTO>> Login(string username);
    }
}