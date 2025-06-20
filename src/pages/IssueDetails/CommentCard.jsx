import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { deleteComment } from "@/Redux/Comment/Action";

const CommentCard = ({ item }) => {
  const dispatch = useDispatch();
  const handleDeleteComment = () => {
    dispatch(deleteComment(item.id));
  };
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarFallback>{item.user.fullName[0]}</AvatarFallback>
        </Avatar>
        <div className="space-y-1 text-gray-400">
          <p>{item.user.fullName}</p>
          <p>{item.content}</p>
        </div>
      </div>
      <Button
        onClick={handleDeleteComment}
        className="rounded-full"
        variant="ghost"
        size="icon"
      >
        <TrashIcon />
      </Button>
    </div>
  );
};

export default CommentCard;
CommentCard;
