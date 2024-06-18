package model

import "time"

type Post struct {
	ID        int        `json:"id"`
	Title     string     `json:"title"`
	Body      string     `json:"body"`
	User      User       `json:"user"`
	CreatedAt time.Time  `json:"created_at"`
	UpdatedAt time.Time  `json:"updated_at"`
	DeletedAt *time.Time `json:"-"`
}

func NewPost(title string, body string, user User) *Post {
	t := time.Now()
	return &Post{
		Title:     title,
		Body:      body,
		User:      user,
		CreatedAt: t,
		UpdatedAt: t,
	}
}

type CreatePostParam struct {
	Title string `json:"title"`
	Body  string `json:"body"`
}
