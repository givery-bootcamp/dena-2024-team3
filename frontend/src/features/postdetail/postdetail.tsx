import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Divider,
  HStack,
  Heading,
  Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { APIService, DateService } from 'shared/services';
import { RootState } from 'shared/store';
import PlayfulDelete from './alert-delete';

export function PostDetail() {
  const params = useParams();
  const { postdetail } = useAppSelector((state: RootState) => state.postdetail);
  const dispatch = useAppDispatch();
  const postId = Number(params.postId);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  useEffect(() => {
    dispatch(APIService.getPostDetail({ id: postId }));
  }, [dispatch, postId]);

  return (
    <Box>
      <Heading as={'h1'}>{postdetail?.title}</Heading>
      <HStack>
        <Avatar size="sm" name={postdetail?.user?.name} />
        <Text as={'span'}>{postdetail?.user?.name}</Text>
      </HStack>
      <Text paddingTop={5}>{postdetail?.body}</Text>
      <Divider />
      <HStack spacing={10} fontSize={'small'} color={'gray'}>
        <Text as={'span'}>
          作成日時 {DateService.formatDate(postdetail?.created_at)}
        </Text>
        <Text as={'span'}>
          投稿日時 {DateService.formatDate(postdetail?.updated_at)}
        </Text>
      </HStack>
      <ButtonGroup colorScheme="blue" paddingTop={5}>
        <Button>編集</Button>
        <Button onClick={() => setIsDeleteDialogOpen(true)} colorScheme="red">
          削除
        </Button>
      </ButtonGroup>
      <PlayfulDelete
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        postId={postId}
      />
    </Box>
  );
}
