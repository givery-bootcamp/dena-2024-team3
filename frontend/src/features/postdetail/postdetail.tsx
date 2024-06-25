import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { APIService,DateService } from 'shared/services';
import { Box, Divider, HStack, Heading, Text, Avatar, Button, ButtonGroup } from '@chakra-ui/react';
import { useParams } from 'react-router-dom'

export function PostDetail() {
  const {postId} = useParams()
  const { postdetail } = useAppSelector((state) => state.postdetail);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(APIService.getPostDetail(Number(postId)));
  }, [dispatch]);

  return(
    <Box>
        <Heading as={'h1'} >{postdetail?.title}</Heading>
        <HStack >
          <Avatar size="sm" name={postdetail?.user?.name} />
          <Text as={'span'}>{postdetail?.user?.name}</Text>
        </HStack>
        <HStack spacing={10}>
          <Text as={'span'}>作成日時 {DateService.formatDate(postdetail?.created_at)}</Text>
          <Text as={'span'}>投稿日時 {DateService.formatDate(postdetail?.updated_at)}</Text>
        </HStack>
        <Divider />
        <Text>{postdetail?.body}</Text>
        <ButtonGroup colorScheme='blue'>
          <Button>編集</Button>
          <Button>削除</Button>
        </ButtonGroup>        
    </Box>
  )
}