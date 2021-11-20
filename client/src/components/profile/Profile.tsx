import { gql, useQuery } from "@apollo/client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Header from "../common/Header";

export const USER_QUERY = gql`
  query UserQuery($id: Int!) {
    user($id: id) {
      id
      nickname
    }
  }
`;

const Profile = ({ id }: { id: number }) => {
  const { loading, error, data } = useQuery(USER_QUERY, { variables: { id } });
  const nickname = data?.nickname;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Card variant="outlined" sx={{ minWidth: 275 }}>
          <CardContent>
            <div className="flex items-center">
              <ArrowBackIcon fontSize="small" />
              <div className="ml-10">
                <Typography variant="h6">{nickname}</Typography>
                <Typography variant="subtitle2">1.7万 件の投稿</Typography>
              </div>
            </div>
            <div className="bg-blue-500 h-40 mt-2">カバー画像</div>
            <div className="flex justify-between items-center mt-5 px-10">
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 100, height: 100 }}
              />
              <Button variant="contained">フォローする</Button>
            </div>
            <Typography className="mt-5 font-bold" variant="h6">
              {nickname}
            </Typography>
            <Typography className="mt-5" variant="subtitle1">
              ホロライブファンタジー所属/【三面図などまとめ】http://bit.ly/2VB78pm【ファンネーム】宝鐘の一味/【生放送タグ】#マリン航海記/【切り抜き動画タグ】#わかるマリン/【ファンアート】#マリンのお宝/おかあさん💘
            </Typography>
            <div className="flex">
              <Typography className="mt-5" variant="subtitle2">
                384 followers
              </Typography>
              <Typography className="mt-5 ml-5" variant="subtitle2">
                384 followers
              </Typography>
            </div>
            <Box
              sx={{ width: "100%", bgcolor: "background.paper", marginTop: 2 }}
            >
              <Tabs value={0} variant="fullWidth" centered>
                <Tab label="投稿" />
                <Tab label="写真" />
                <Tab label="いいね" />
              </Tabs>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Profile;
