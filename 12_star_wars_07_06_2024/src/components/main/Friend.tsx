import React from 'react'

interface IFriendProps {
    friend: string;
  }

const Friend: React.FC<IFriendProps> = ({friend}) => {

    const getClassName = (friend: string) => {
        if (friend.includes('friend7')) {
          return "bottomLeft";
        }
        if (friend.includes('friend9')) {
          return "bottomRight";
        }
        return '';
      };
    
      return (
        <img src={friend} alt={friend} className={getClassName(friend)} />
      );
    }

export default Friend