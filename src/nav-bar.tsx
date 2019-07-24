import React from 'react';
import {
  Nav,
//   NavExpandable,
  NavItem,
//   NavItemSeparator,
  NavList,
//   NavGroup,
  NavVariants,
  PageHeader
} from '@patternfly/react-core';

export const NavHorizontalList: React.FC<NavProps> = (props) => {
  const [activeItem, setActiveItem] = React.useState(0);

  const onSelect = (result: any) => {
      setActiveItem(result.itemId)
  }

  const nav = (
      <Nav onSelect={onSelect}>
        <NavList variant={NavVariants.horizontal}>
          {Array.apply(0, Array(10)).map(function (x, i) {
            const num = i + 1;
            return <NavItem key={num} itemId={num} isActive={activeItem === num}>
              Horizontal nav item {num}
            </NavItem>;
          })}
        </NavList>
      </Nav>
    );
  return (
      <PageHeader topNav={nav} style={{ backgroundColor: 'rgb(21, 21, 21)' }} />
    );
  }

export type NavProps = {

}