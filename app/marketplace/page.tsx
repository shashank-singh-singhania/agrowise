import Link from "next/link"
import { ArrowRight, Leaf, ShoppingCart, TrendingUp, Users, Truck, BarChart, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"

export default function Marketplace() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-green-600" />
              <span className="text-xl font-bold">AgroWise</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="/#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              How It Works
            </Link>
            <Link href="/#testimonials" className="text-sm font-medium hover:underline underline-offset-4">
              Testimonials
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="outline" size="sm">
              Log In
            </Button>
            <Button size="sm" className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600">
              Sign Up
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white dark:from-green-900/20 dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    Farmer's Marketplace
                  </h1>
                  <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Connect directly with buyers, eliminating middlemen and increasing your profits. Our marketplace
                    matches you with the best buyers for your crops.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600">
                    List Your Produce
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">Browse Listings</Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Farmers selling produce directly to buyers"
                  className="rounded-lg object-cover border shadow-lg"
                  width={500}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section> */}

        {/* Benefits Section */}
        <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">Benefits</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Why Sell on Our Marketplace?
                </h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  AgroWise Marketplace offers unique advantages to help farmers maximize their profits and reach.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {/* Benefit 1 */}
              <Card className="border-green-100 dark:border-green-900 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="p-2 w-12 h-12 rounded-full bg-green-100 dark:bg-green-800/50 flex items-center justify-center mb-2">
                    <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle>Higher Profit Margins</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Sell directly to consumers and businesses, eliminating middlemen and increasing your profit margins
                    by up to 40%.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Benefit 2 */}
              <Card className="border-green-100 dark:border-green-900 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="p-2 w-12 h-12 rounded-full bg-green-100 dark:bg-green-800/50 flex items-center justify-center mb-2">
                    <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle>Verified Buyers Network</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Connect with our network of verified buyers including restaurants, grocery chains, and individual
                    consumers.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Benefit 3 */}
              <Card className="border-green-100 dark:border-green-900 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="p-2 w-12 h-12 rounded-full bg-green-100 dark:bg-green-800/50 flex items-center justify-center mb-2">
                    <Truck className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle>Logistics Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Access our network of transportation partners to ensure your produce reaches buyers fresh and on
                    time.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-12 md:py-24 bg-green-50 dark:bg-green-900/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Simple Steps to Sell Your Produce
                </h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Getting started with AgroWise Marketplace is easy and straightforward.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-800/50">
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">1</span>
                </div>
                <h3 className="text-xl font-bold">Create a Listing</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Add details about your produce including quantity, quality, harvest date, and pricing.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-800/50">
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">2</span>
                </div>
                <h3 className="text-xl font-bold">Get Matched</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our AI algorithm matches your produce with the most suitable buyers in your area.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-800/50">
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">3</span>
                </div>
                <h3 className="text-xl font-bold">Negotiate & Confirm</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Communicate with buyers, negotiate terms, and confirm the sale through our secure platform.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-800/50">
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">4</span>
                </div>
                <h3 className="text-xl font-bold">Deliver & Get Paid</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Arrange delivery and receive payment through our secure payment system with minimal transaction fees.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600">
                Start Selling Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Listings Section */}
        <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
                  Featured Listings
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Current Opportunities</h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse some of the active listings and buyer requests on our marketplace.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {/* Listing 1 */}
              <Card className="border-green-100 dark:border-green-900 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <Image
                  src="https://plus.unsplash.com/premium_photo-1661811820259-2575b82101bf?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Organic Tomatoes"
                  width={400}
                  height={200}
                  className="rounded-t-lg object-cover w-full h-48"
                  />
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium bg-green-100 text-green-700 px-2 py-1 rounded">Selling</span>
                    <span className="text-sm text-gray-500">Posted 2 days ago</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Organic Tomatoes</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    500 kg of freshly harvested organic tomatoes. Pesticide-free, grown using natural fertilizers.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">₹40/kg</span>
                    <span className="text-sm text-gray-500">Location: Nashik, Maharashtra</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600">
                    Contact Seller
                  </Button>
                </CardFooter>
              </Card>

              {/* Listing 2 */}
              <Card className="border-green-100 dark:border-green-900 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <Image
                    src="https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Basmati Rice"
                    width={400}
                    height={200}
                    className="rounded-t-lg object-cover w-full h-48"
                  />
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium bg-blue-100 text-blue-700 px-2 py-1 rounded">Buying</span>
                    <span className="text-sm text-gray-500">Posted 1 day ago</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Basmati Rice</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    Looking to purchase 2 tons of premium quality basmati rice directly from farmers. Long-term contract
                    possible.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">₹75/kg</span>
                    <span className="text-sm text-gray-500">Location: Delhi NCR</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600">
                    Contact Buyer
                  </Button>
                </CardFooter>
              </Card>

              {/* Listing 3 */}
              <Card className="border-green-100 dark:border-green-900 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <Image
                    src="https://images.unsplash.com/photo-1702897906462-b47c34908f36?q=80&w=3094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Fresh Apples"
                    width={400}
                    height={200}
                    className="rounded-t-lg object-cover w-full h-48"
                  />
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium bg-green-100 text-green-700 px-2 py-1 rounded">Selling</span>
                    <span className="text-sm text-gray-500">Posted 3 days ago</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Himalayan Apples</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    800 kg of premium Himalayan apples. Crisp, sweet, and perfect for retail or processing.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">₹120/kg</span>
                    <span className="text-sm text-gray-500">Location: Shimla, Himachal Pradesh</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600">
                    Contact Seller
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline" className="text-green-600 border-green-600">
                View All Listings
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        {/* <section className="w-full py-12 md:py-24 bg-green-50 dark:bg-green-900/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
                  Success Stories
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Marketplace Success</h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from farmers who have transformed their businesses using our marketplace.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <Card className="border-green-100">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <img
                      src="/placeholder.svg?height=100&width=100"
                      alt="Farmer Suresh"
                      className="rounded-full h-24 w-24 object-cover mx-auto md:mx-0"
                    />
                    <div className="space-y-4">
                      <p className="text-gray-500 dark:text-gray-400 italic">
                        "Before using AgroWise Marketplace, I was selling my organic vegetables to middlemen at low
                        prices. Now I connect directly with restaurants and premium grocery stores, increasing my income
                        by 45%. The platform has transformed my small farm into a profitable business."
                      </p>
                      <div>
                        <h4 className="font-semibold">Suresh Patel</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Organic Vegetable Farmer, Gujarat</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-100">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <img
                      src="/placeholder.svg?height=100&width=100"
                      alt="Farmer Meena"
                      className="rounded-full h-24 w-24 object-cover mx-auto md:mx-0"
                    />
                    <div className="space-y-4">
                      <p className="text-gray-500 dark:text-gray-400 italic">
                        "As a small-scale fruit grower, I struggled to find reliable buyers. Through AgroWise
                        Marketplace, I connected with a juice processing company that now buys my entire seasonal
                        harvest at premium rates. The secure payment system gives me peace of mind."
                      </p>
                      <div>
                        <h4 className="font-semibold">Meena Kumari</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Fruit Grower, Uttarakhand</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section> */}

        {/* Market Insights Section */}
        <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
                  Market Insights
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Data-Driven Decisions</h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Access real-time market data to make informed decisions about what to grow and when to sell.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <Card className="border-green-100 dark:border-green-900 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="p-2 w-12 h-12 rounded-full bg-green-100 dark:bg-green-800/50 flex items-center justify-center mb-2">
                    <BarChart className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle>Price Trend Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Access historical and projected price trends for various crops across different regions to time your
                    sales perfectly.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-green-600">
                    View Price Trends <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-green-100 dark:border-green-900 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="p-2 w-12 h-12 rounded-full bg-green-100 dark:bg-green-800/50 flex items-center justify-center mb-2">
                    <ShoppingCart className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle>Demand Forecasting</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Get insights into upcoming demand for different crops based on market analysis, helping you plan
                    your production accordingly.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-green-600">
                    View Demand Forecast <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-green-600 dark:bg-green-800 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Farm Business?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of farmers who are already selling directly to buyers and maximizing their profits.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-white text-green-600 hover:bg-gray-100">Create Your Listing</Button>
                <Button variant="outline" className="border-white text-white hover:bg-green-700">
                  Browse Marketplace
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {/* <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">FAQs</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Common Questions</h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to frequently asked questions about our marketplace.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <Card className="border-green-100">
                <CardHeader>
                  <CardTitle>How much does it cost to list my produce?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Basic listings are completely free. We only charge a small commission (3%) when a sale is
                    successfully completed through our platform.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-100">
                <CardHeader>
                  <CardTitle>How is payment handled?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    We offer a secure escrow payment system. Buyers deposit funds, which are released to sellers once
                    the produce is delivered and verified.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-100">
                <CardHeader>
                  <CardTitle>Can I sell any type of agricultural produce?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Yes, our marketplace supports all types of agricultural produce including fruits, vegetables,
                    grains, dairy, and more. All listings must comply with local regulations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-100">
                <CardHeader>
                  <CardTitle>How do I arrange transportation?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    You can arrange your own transportation or use our network of verified logistics partners who offer
                    competitive rates for marketplace users.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center mt-12">
              <Button variant="outline" className="text-green-600 border-green-600">
                View All FAQs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section> */}

        {/* Contact Section */}
        {/* <section className="w-full py-12 md:py-24 bg-green-50 dark:bg-green-900/20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
                    Contact Us
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Need Help?</h2>
                  <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our marketplace support team is here to help you with any questions or issues.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-full bg-green-100 dark:bg-green-800/50">
                      <MessageSquare className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <span>marketplace@agrowise.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-full bg-green-100 dark:bg-green-800/50">
                      <MessageSquare className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <span>+91 9876543210</span>
                  </div>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>Have a specific question about the marketplace? We're here to help.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="first-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          First Name
                        </label>
                        <input
                          id="first-name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="last-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Last Name
                        </label>
                        <input
                          id="last-name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your message"
                      />
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600">
                    Send Message
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section> */}
      </main>

      {/* Footer */}
      <footer className="border-t bg-gray-50 dark:bg-gray-900 dark:border-gray-800">
        <div className="container flex flex-col gap-6 py-8 md:py-12 px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 lg:gap-12">
            <div className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-green-600" />
              <span className="text-xl font-bold">AgroWise</span>
            </div>
            <nav className="flex gap-4 md:gap-6 flex-wrap">
              <Link href="/#features" className="text-sm font-medium hover:underline underline-offset-4">
                Features
              </Link>
              <Link href="/#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
                How It Works
              </Link>
              <Link href="/#testimonials" className="text-sm font-medium hover:underline underline-offset-4">
                Testimonials
              </Link>
              <Link href="/#contact" className="text-sm font-medium hover:underline underline-offset-4">
                Contact
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                Terms of Service
              </Link>
            </nav>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">© 2025 AgroWise. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
