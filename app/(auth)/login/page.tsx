import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LoginPage() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Welcome back!</CardTitle>
          <CardDescription>
            Login with your GitHub Email Account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full" variant={"outline"}>Sign In With GitHub</Button>
        </CardContent>
      </Card>
    </div>
  );
}
