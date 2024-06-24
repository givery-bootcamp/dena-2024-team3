//go:generate mockgen -source=user_repository.go -destination=repository_mock/user_repository_mock.go -package repository_mock
package repository

import (
	"context"
	"myapp/internal/domain/model"
)

type UserRepository interface {
	GetByID(ctx context.Context, id int) (*model.User, error)
	GetBySigninParam(ctx context.Context, param model.UserSigninParam) (*model.User, error)
}
