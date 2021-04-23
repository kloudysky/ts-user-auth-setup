import { Box, Button, Flex, Link } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { useMeQuery } from "../generated/graphql";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const [{ data, fetching }] = useMeQuery();
  let body = null;

  if (fetching) {
  } else if (!data?.me) {
    body = (
      <>
        <NextLink href="/login">
          <Link color={"white"} mr={2}>
            Login
          </Link>
        </NextLink>
        <NextLink href="/register">
          <Link color={"white"}>Register</Link>
        </NextLink>
      </>
    );
  } else {
    body = (
      <Flex justifyContent="center" alignItems="center">
        <Button mr={2}>{data.me.username}</Button>
        <Button>Logout</Button>
      </Flex>
    );
  }
  return (
    <Flex bg="tomato" p={5}>
      <Box ml={"auto"}>{body}</Box>
    </Flex>
  );
};
