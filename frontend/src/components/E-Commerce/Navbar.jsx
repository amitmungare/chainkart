import { PermIdentityOutlined, ShoppingBagOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../store/userSlice";
import { toast } from "react-toastify";
import styled from "styled-components";

const ListItem = styled.div`
  position: absolute;
  top: 1.5rem;
  background-color: #f0f8ff;
  padding: 0.75rem;
  z-index: 99;
  display: none;
`;

const List = styled.li`
  // background-color: #007fff;
  // color: #fff;
  // padding: 5px;
  // border-radius: 5px;
  &:hover {
    cursor: pointer;
    color: rgb(37, 99, 235);
    font-weight: bold;
  }
`;

const Menu = styled.div`
  position: relative;

  &:hover {
    ${ListItem} {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`;

const Navbar = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.cartItems);
  const handleLogOut = async () => {
    dispatch(logoutUser({ toast }));
  };

  return (
    <div className="flex justify-between w-full mt-9 ">
      <Link to="/" className="text-indigo-600 text-2xl font-bold px-3 ">
        Chainkart
      </Link>

      <ul className="flex gap-5 ">
        <Menu>
          <List>Electronics</List>
          <ListItem>
            <Link className="hover-1" to="/Electronics/Laptops">
              Laptop
            </Link>
            <Link className="hover-1" to="/Electronics/Headphones">
              Headphones
            </Link>
            <Link className="hover-1" to="/Electronics/Smartphones">
              Smartphones
            </Link>
          </ListItem>
        </Menu>

        <Menu>
          <List>Sports</List>
          <ListItem>
            <Link className="hover-1" to="/Sports/Cricket">
              Cricket
            </Link>
            <Link className="hover-1" to="/Sports/Football">
              Football
            </Link>
            <Link className="hover-1" to="/Sports/Badminton">
              Badminton
            </Link>
          </ListItem>
        </Menu>

        <Menu>
          <List>Fashion</List>
          <ListItem>
            <Link className="hover-1" to="/Fashion/Shirts">
              Shirts
            </Link>
            <Link className="hover-1" to="/Fashion/Shoes">
              Shoes
            </Link>
            <Link className="hover-1" to="/Fashion/Watches">
              Watches
            </Link>
          </ListItem>
        </Menu>

        <Menu>
          <List>Books</List>
          <ListItem>
            <Link className="hover-1" to="/Books/Autobiography">
              Autobiography
            </Link>
            <Link className="hover-1" to="/Books/Textbooks">
              Textbooks
            </Link>
            <Link className="hover-1" to="/Books/Fiction">
              Fiction
            </Link>
          </ListItem>
        </Menu>

        <Menu>
          <List>Home Appliances</List>
          <ListItem>
            <Link className="hover-1" to="/Home_Appliances/Television">
              Television
            </Link>
            <Link className="hover-1" to="/Home_Appliances/Washing_Machine">
              Washing Machine
            </Link>
            <Link className="hover-1" to="/Home_Appliances/Air_Conditioner">
              Air Conditioner
            </Link>
          </ListItem>
        </Menu>
      </ul>
      <div className="px-3 flex gap-5">
        <div className="bg-[#F0F8FF] rounded-full p-1 w-9 h-9 text-gray-500 flex items-center justify-center">
          <Link to="/profile">
            <PermIdentityOutlined />
          </Link>
        </div>
        <div className="flex justify-center items-center">
          {user ? (
            <span onClick={handleLogOut} className="hover mt-2">
              Logout
            </span>
          ) : (
            <Link to="/login">
              <span className="hover mt-2">Sign in</span>
            </Link>
          )}
        </div>

        <Link to="/cart">
          <div className="bg-[#F0F8FF] rounded-full p-1 w-9 h-9 text-gray-500 flex items-center justify-center mr-2">
            <Badge badgeContent={items.length} color="primary">
              <ShoppingBagOutlined />
            </Badge>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
