import { Card, CardContent } from "@/components/card";
import { Button } from "@/components/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen text-gray-900">
      <main className="container mx-auto max-w-7xl px-6 py-12 text-center">
        <h1 className="text-5xl text-white font-extrabold mb-6">
          Boost Your B2B Sales with AI-Driven CRM
        </h1>
        <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-8">
          Streamline your business processes, enhance customer relationships,
          and drive sales growth with our innovative CRM solutions.
        </p>
        <Button className="bg-lime-600 text-white px-6 py-3 rounded-lg hover:bg-lime-700">
          <Link href="/signup">Get Started</Link>
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card>
            <CardContent>
              <h3 className="text-white text-xl font-semibold mb-2">
                Automated Workflows
              </h3>
              <div className="bg-lime-600 h-[1px] mb-4" />
              <p className="text-gray-200">
                Save time and increase efficiency with intelligent automation.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="text-white text-xl font-semibold mb-2">
                Customer Insights
              </h3>
              <div className="bg-lime-600 h-[1px] mb-4" />
              <p className="text-gray-200">
                Gain valuable insights with AI-driven analytics and reporting.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="text-white text-xl font-semibold mb-2">
                Seamless Integrations
              </h3>
              <div className="bg-lime-600 h-[1px] mb-4" />
              <p className="text-gray-200">
                Connect effortlessly with your favorite business tools.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
