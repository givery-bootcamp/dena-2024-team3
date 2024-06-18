package repository

import (
	"context"
	"myapp/internal/domain/model"
)

//go:generate mockgen -source=hello_world_repository.go -destination=mock/hello_world_repository_mock.go
type HelloWorldRepository interface {
	Get(ctx context.Context, lang string) (*model.HelloWorld, error)
}
