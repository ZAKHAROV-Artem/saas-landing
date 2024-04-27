import { Button } from "../ui/button";

export default function AuthButtons() {
  return (
    <div className="hidden gap-x-2 sm:flex">
      <Button variant="ghost">Sign up</Button>
      <Button variant="purple" size="lg">
        Sign in
      </Button>
    </div>
  );
}
