import { PermIdentityOutlined, ShoppingBagOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutUser, selectUser } from "../../store/userSlice";
import { toast } from "react-toastify";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectCartItems } from "../../store/cartSlice";

const ListItem = styled.div`
  position: absolute;
  top: 1.5rem;
  background-color: #f0f8ff;
  padding: 0.75rem;
  z-index: 99;
  display: none;
`;

const List = styled.li`
  font-weight: 600;
  font-size: 18px;
  color: rgb(0, 0, 0);

  &:hover {
    cursor: pointer;
    color: #0369a1;
    font-weight: bold;
  }
`;

const Menu = styled.div`
  position: relative;

  &:hover {
    ${ListItem} {
      margin-top: 6px;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`;

const Navbar = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const items = useAppSelector(selectCartItems);
  const handleLogOut = async () => {
    dispatch(logoutUser());
  };

  return (
    <div className="flex justify-between w-full mt-9 ">
      <NavLink to="/" className="text-[#0369a1] text-2xl font-bold px-3 ">
        Chainkart
      </NavLink>

      <ul className="flex gap-5">
        <Menu>
          <List>Electronics</List>
          <ListItem>
            <NavLink className="hover-1 text-black" to="/Electronics/Laptops">
              Laptop
            </NavLink>
            <NavLink
              className="hover-1 text-black"
              to="/Electronics/Headphones"
            >
              Headphones
            </NavLink>
            <NavLink
              className="hover-1 text-black"
              to="/Electronics/SmartPhones"
            >
              SmartPhones
            </NavLink>
          </ListItem>
        </Menu>

        <Menu>
          <List>Sports</List>
          <ListItem>
            <NavLink className="hover-1 text-black" to="/Sports/Cricket">
              Cricket
            </NavLink>
            <NavLink className="hover-1 text-black" to="/Sports/Football">
              Football
            </NavLink>
            <NavLink className="hover-1 text-black" to="/Sports/Badminton">
              Badminton
            </NavLink>
          </ListItem>
        </Menu>

        <Menu>
          <List>Fashion</List>
          <ListItem>
            <NavLink className="hover-1 text-black" to="/Fashion/Shirts">
              Shirts
            </NavLink>
            <NavLink className="hover-1 text-black" to="/Fashion/Shoes">
              Shoes
            </NavLink>
            <NavLink className="hover-1 text-black" to="/Fashion/Watches">
              Watches
            </NavLink>
          </ListItem>
        </Menu>

        <Menu>
          <List>Books</List>
          <ListItem>
            <NavLink className="hover-1 text-black" to="/Books/Autobiography">
              Autobiography
            </NavLink>
            <NavLink className="hover-1 text-black" to="/Books/Textbook">
              Textbooks
            </NavLink>
            <NavLink className="hover-1 text-black" to="/Books/Fiction">
              Fiction
            </NavLink>
          </ListItem>
        </Menu>

        <Menu>
          <List>Home Appliances</List>
          <ListItem>
            <NavLink
              className="hover-1 text-black"
              to="/Home_Appliances/Television"
            >
              Television
            </NavLink>
            <NavLink
              className="hover-1 text-black"
              to="/Home_Appliances/Washing_Machines"
            >
              Washing Machine
            </NavLink>
            <NavLink
              className="hover-1 text-black"
              to="/Home_Appliances/Air_Conditioner"
            >
              Air Conditioner
            </NavLink>
          </ListItem>
        </Menu>
      </ul>
      <div className="px-3 flex gap-5">
        <div className="bg-[#F0F8FF] rounded-full p-1 w-9 h-9 text-gray-500 flex items-center justify-center">
          <NavLink to="/profile">
            <PermIdentityOutlined />
          </NavLink>
        </div>
        <div className="flex justify-center items-center">
          {user ? (
            <span
              onClick={handleLogOut}
              className="hover mt-2 text-[18px] font-semibold text-[rgb(0,0,0,0.56)]"
            >
              Logout
            </span>
          ) : (
            <NavLink to="/login">
              <span className="font-semibold text-gray-600 hover:text-indigo-500">
                Sign in
              </span>
            </NavLink>
          )}
        </div>

        <NavLink to="/cart">
          <div className="bg-[#F0F8FF] rounded-full p-1 w-9 h-9 text-gray-500 flex items-center justify-center mr-2">
            <Badge badgeContent={items.length} color="primary">
              <ShoppingBagOutlined />
            </Badge>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
