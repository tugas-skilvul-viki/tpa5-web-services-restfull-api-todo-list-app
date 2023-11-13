# Dokumentasi API TodoList

## Overview

This is the documentation for the TodoList App API. The API allows you to manage users and their to-do lists. It provides endpoints for user authentication, user management, and to-do list operations.

## Authentication

To access protected endpoints, you need to include a Bearer Token in the Authorization header of your requests.

## Users

### Get Users Data

- **Endpoint:** `/users`
- **Method:** `GET`
- **Description:** Menampilkan semua data users

### Get Users By Id

- **Endpoint:** `/users/{user_id}`
- **Method:** `GET`
- **Authentication:** Required
- **Description:** Menampilkan data users berdasarkan ID

### Get Users Todos By Id

- **Endpoint:** `/users/{user_id}/todos`
- **Method:** `GET`
- **Authentication:** Required
- **Description:** Menampilkan data todo users berdasarkan ID

### Create Users Data

- **Endpoint:** `/users`
- **Method:** `POST`
- **Authentication:** Required
- **Description:** Menambahkan user baru
- **Request Body:**
  ```json
  {
    "name": "Viki",
    "username" : "viki",
    "email" : "viki@gmail.com",
    "password": "viki123"
  }

### Edit Users Data

- **Endpoint:** `/users/{user_id}`
- **Method:** `PUT`
- **Authentication:** Required
- **Description:** Mengedit Data User
- **Request Body:**
  ```json
  {
    "name": "Devi",
    "username" : "devi",
    "email" : "devi@gmail.com",
    "password": "devi123"
  }

### Delete Users Data By Id

- **Endpoint:** `/users/{user_id}`
- **Method:** `DELETE`
- **Authentication:** Required
- **Description:** Menghapus user data berdasarkan ID


## Auth

### Users Login

- **Endpoint:** `/auth/login`
- **Method:** `POST`
- **Description:** Login Users
- **Request Body:**
  ```json
  {
    "email": "vikiade@gmail.com",
    "password": "viki123"
  }

### Users Register

- **Endpoint:** `/auth/regis`
- **Method:** `POST`
- **Request Body:**
- **Description:** Register Users
   ```json
  {
    "name": "viki",
    "username" : "vikiade@gmail.com",
    "email" : "vikiade@gmail.com",
    "password": "viki123"
  }

## Todos

### Get Data All Todo

- **Endpoint:** `/todos`
- **Method:** `GET`
- **Authentication:** Required
- **Description:** Menampilkan semua data todo

### Get Data Todos By Id

- **Endpoint:** `/todos/{todo_id}`
- **Method:** `GET`
- **Authentication:** Required
- **Description:** Menampilkan data todo berdasarkan id todo

### Create Data Todos

- **Endpoint:** `/todos`
- **Method:** `POST`
- **Authentication:** Required
- **Description:** Menambahkan data todo
- **Request Body:**
  ```json
  {
    "value": "Belajar Matematika",
    "status": false,
    "userID": "655196a421d97649aa23807a"
  }

### Update Data Todos

- **Endpoint:** `/todos/{todo_id}`
- **Method:** `PUT`
- **Authentication:** Required
- **Description:** Update data todo berdasarkan todo Id
- **Request Body:**
  ```json
  {
    "value": "Belajar Matematika",
    "status": true,
  }

### Delete Data Todos

- **Endpoint:** `/todos/{todo_id}`
- **Method:** `DELETE`
- **Authentication:** Required
- **Description:** Menghapus data todo berdasarkan id


### Delete All Data Todos

- **Endpoint:** `/todos`
- **Method:** `DELETE`
- **Authentication:** Required
- **Description:** Menghapus semua data todo

