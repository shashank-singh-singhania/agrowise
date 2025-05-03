"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Leaf, Shield, Send, Umbrella, FileText, AlertTriangle, CheckCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function InsuranceAdvisor() {
  const [question, setQuestion] = useState("")
  const [chatHistory, setChatHistory] = useState<{ role: string; content: string }[]>([
    { 
      role: "assistant", 
      content: "Hello! I'm your Crop Insurance Assistant. Ask me any questions about agricultural insurance schemes, eligibility, or coverage details." 
    }
  ])
  const [isLoading, setIsLoading] = useState(false)
  const [recommendations, setRecommendations] = useState<any[]>([])
  const [showRecommendations, setShowRecommendations] = useState(false)

  const handleQuestionSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!question.trim()) return

    // Add user question to chat
    setChatHistory([...chatHistory, { role: "user", content: question }])
    setIsLoading(true)

    try {
      const response = await fetch("http://127.0.0.1:5000/insurance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language: "English",
          question: question,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to fetch response")
      }

      const data = await response.json()
      
      // Add assistant response to chat
      setChatHistory(prev => [...prev, { role: "assistant", content: data.response || "I'm sorry, I couldn't process your request." }])
    } catch (error) {
      console.error("Error fetching response:", error)
      setChatHistory(prev => [...prev, { 
        role: "assistant", 
        content: "I'm sorry, I'm having trouble connecting to the server. Please try again later." 
      }])
    } finally {
      setIsLoading(false)
      setQuestion("")
    }
  }

  const handleRecommendationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would call an API to get personalized recommendations
    // For demo purposes, we'll show mock recommendations
    setRecommendations([
      {
        name: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
        provider: "Government of India",
        coverage: "Comprehensive coverage for crops against non-preventable risks",
        premium: "1.5% - 5% of sum insured (varies by crop)",
        suitability: "High",
        link: "#pmfby"
      },
      {
        name: "Weather Based Crop Insurance Scheme (WBCIS)",
        provider: "Agricultural Insurance Company",
        coverage: "Protection against adverse weather conditions",
        premium: "2% - 6% of sum insured",
        suitability: "Medium",
        link: "#wbcis"
      },
      {
        name: "Restructured Weather Based Crop Insurance Scheme",
        provider: "HDFC ERGO",
        coverage: "Coverage against rainfall, temperature, humidity risks",
        premium: "3.5% of sum insured",
        suitability: "Medium",
        link: "#rwbcis"
      }
    ])
    setShowRecommendations(true)
  }

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
                    Crop Insurance Advisor
                  </h1>
                  <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Get personalized recommendations on crop insurance options based on your location, crop type, and risk factors to protect your investment.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600">
                    Get Recommendations
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">Learn About Insurance</Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Farmer reviewing crop insurance options"
                  className="rounded-lg object-cover border shadow-lg"
                  width={500}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section> */}

        {/* Main Content */}
        <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="advisor" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="advisor">Insurance Advisor</TabsTrigger>
                <TabsTrigger value="chat">Insurance Assistant</TabsTrigger>
              </TabsList>
              
              {/* Insurance Advisor Tab */}
              <TabsContent value="advisor" className="space-y-8">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
                      Personalized Recommendations
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Find the Right Coverage</h2>
                    <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      Tell us about your farm and crops to receive tailored insurance recommendations.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Your Farm Details</CardTitle>
                      <CardDescription>
                        Provide information about your farm to get personalized insurance recommendations.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleRecommendationSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="location">Location</Label>
                          <Select defaultValue="maharashtra">
                            <SelectTrigger>
                              <SelectValue placeholder="Select your state" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="maharashtra">Maharashtra</SelectItem>
                              <SelectItem value="punjab">Punjab</SelectItem>
                              <SelectItem value="karnataka">Karnataka</SelectItem>
                              <SelectItem value="gujarat">Gujarat</SelectItem>
                              <SelectItem value="haryana">Haryana</SelectItem>
                              <SelectItem value="madhya-pradesh">Madhya Pradesh</SelectItem>
                              <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
                              <SelectItem value="west-bengal">West Bengal</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="district">District</Label>
                          <Input id="district" placeholder="Enter your district" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="crop-type">Primary Crop</Label>
                          <Select defaultValue="wheat">
                            <SelectTrigger>
                              <SelectValue placeholder="Select crop type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="wheat">Wheat</SelectItem>
                              <SelectItem value="rice">Rice</SelectItem>
                              <SelectItem value="cotton">Cotton</SelectItem>
                              <SelectItem value="sugarcane">Sugarcane</SelectItem>
                              <SelectItem value="pulses">Pulses</SelectItem>
                              <SelectItem value="oilseeds">Oilseeds</SelectItem>
                              <SelectItem value="fruits">Fruits</SelectItem>
                              <SelectItem value="vegetables">Vegetables</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="farm-size">Farm Size (in acres)</Label>
                          <Input id="farm-size" type="number" placeholder="Enter farm size" min="0" step="0.5" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Irrigation Type</Label>
                          <RadioGroup defaultValue="rainfed">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="rainfed" id="rainfed" />
                              <Label htmlFor="rainfed">Rainfed</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="irrigated" id="irrigated" />
                              <Label htmlFor="irrigated">Irrigated</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="partial" id="partial" />
                              <Label htmlFor="partial">Partially Irrigated</Label>
                            </div>
                          </RadioGroup>
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Primary Risk Concerns</Label>
                          <RadioGroup defaultValue="drought">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="drought" id="drought" />
                              <Label htmlFor="drought">Drought</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="flood" id="flood" />
                              <Label htmlFor="flood">Flood</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="pests" id="pests" />
                              <Label htmlFor="pests">Pests & Diseases</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="hail" id="hail" />
                              <Label htmlFor="hail">Hail/Storm Damage</Label>
                            </div>
                          </RadioGroup>
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
                        >
                          Get Recommendations
                        </Button>
                      </form>
                    </CardContent>
                  </Card>

                  <div className="space-y-6">
                    {showRecommendations ? (
                      <>
                        <h3 className="text-xl font-bold">Your Recommended Insurance Options</h3>
                        {recommendations.map((insurance, index) => (
                          <Card key={index} className={`border-l-4 ${index === 0 ? 'border-l-green-500' : index === 1 ? 'border-l-yellow-500' : 'border-l-blue-500'}`}>
                            <CardHeader className="pb-2">
                              <div className="flex justify-between items-start">
                                <div>
                                  <CardTitle>{insurance.name}</CardTitle>
                                  <CardDescription>Provider: {insurance.provider}</CardDescription>
                                </div>
                                <div className={`px-2 py-1 rounded text-xs font-medium ${
                                  insurance.suitability === 'High' 
                                    ? 'bg-green-100 text-green-700' 
                                    : insurance.suitability === 'Medium'
                                    ? 'bg-yellow-100 text-yellow-700'
                                    : 'bg-blue-100 text-blue-700'
                                }`}>
                                  {insurance.suitability} Match
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-2 text-sm">
                                <div className="flex items-start gap-2">
                                  <Shield className="h-4 w-4 text-green-600 mt-0.5" />
                                  <span><strong>Coverage:</strong> {insurance.coverage}</span>
                                </div>
                                <div className="flex items-start gap-2">
                                  <Umbrella className="h-4 w-4 text-green-600 mt-0.5" />
                                  <span><strong>Premium:</strong> {insurance.premium}</span>
                                </div>
                              </div>
                            </CardContent>
                            <CardFooter>
                              <Button variant="outline" className="w-full text-green-600" asChild>
                                <Link href={insurance.link}>
                                  View Details
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                              </Button>
                            </CardFooter>
                          </Card>
                        ))}
                        <div className="flex justify-center mt-4">
                          <Button variant="outline" className="text-green-600">
                            Compare All Options
                          </Button>
                        </div>
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full space-y-4 p-8 border rounded-lg border-dashed text-center">
                        <Shield className="h-16 w-16 text-green-600/20" />
                        <h3 className="text-xl font-medium">Insurance Recommendations</h3>
                        <p className="text-gray-500 dark:text-gray-400 max-w-md">
                          Fill out the form with your farm details to receive personalized insurance recommendations that match your specific needs.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>
              
              {/* Chat Assistant Tab */}
              <TabsContent value="chat" className="space-y-8">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
                      Insurance Assistant
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ask About Insurance</h2>
                    <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      Have questions about crop insurance? Our AI assistant can help you understand policies, eligibility, and more.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="md:col-span-1">
                    <CardHeader>
                      <CardTitle>Common Questions</CardTitle>
                      <CardDescription>
                        Click on any question to ask the assistant
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Button 
                        variant="outline" 
                        className="w-full justify-start text-left h-auto py-2"
                        onClick={() => setQuestion("What is the eligibility for PMFBY crop insurance scheme?")}
                      >
                        What is the eligibility for PMFBY crop insurance scheme?
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full justify-start text-left h-auto py-2"
                        onClick={() => setQuestion("How do I file a claim for crop damage?")}
                      >
                        How do I file a claim for crop damage?
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full justify-start text-left h-auto py-2"
                        onClick={() => setQuestion("What is the difference between PMFBY and WBCIS?")}
                      >
                        What is the difference between PMFBY and WBCIS?
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full justify-start text-left h-auto py-2"
                        onClick={() => setQuestion("What documents are required for crop insurance?")}
                      >
                        What documents are required for crop insurance?
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full justify-start text-left h-auto py-2"
                        onClick={() => setQuestion("When is the last date to apply for Kharif crop insurance?")}
                      >
                        When is the last date to apply for Kharif crop insurance?
                      </Button>
                    </CardContent>
                    <CardFooter>
                      <div className="space-y-2 w-full">
                        <h4 className="text-sm font-medium">Helpful Resources</h4>
                        <div className="grid gap-2">
                          <Link href="#" className="flex items-center text-sm text-green-600 hover:underline">
                            <FileText className="h-4 w-4 mr-2" />
                            PMFBY Official Guidelines
                          </Link>
                          <Link href="#" className="flex items-center text-sm text-green-600 hover:underline">
                            <FileText className="h-4 w-4 mr-2" />
                            Claim Process Documentation
                          </Link>
                          <Link href="#" className="flex items-center text-sm text-green-600 hover:underline">
                            <FileText className="h-4 w-4 mr-2" />
                            Insurance Premium Calculator
                          </Link>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>

                  <Card className="md:col-span-2">
                    <CardHeader>
                      <CardTitle>Chat with Insurance Assistant</CardTitle>
                      <CardDescription>
                        Ask any questions about crop insurance schemes, eligibility, or claims
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="h-[400px] overflow-y-auto border rounded-lg p-4 space-y-4">
                          {chatHistory.map((message, index) => (
                            <div 
                              key={index} 
                              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                              <div 
                                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                                  message.role === 'user' 
                                    ? 'bg-green-600 text-white' 
                                    : 'bg-muted'
                                }`}
                              >
                                {message.content}
                              </div>
                            </div>
                          ))}
                          {isLoading && (
                            <div className="flex justify-start">
                              <div className="max-w-[80%] rounded-lg px-4 py-2 bg-muted">
                                <div className="flex space-x-2 items-center">
                                  <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></div>
                                  <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse delay-75"></div>
                                  <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse delay-150"></div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                        <form onSubmit={handleQuestionSubmit} className="flex gap-2">
                          <Input 
                            placeholder="Type your question here..." 
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            className="flex-1"
                          />
                          <Button 
                            type="submit" 
                            className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
                            disabled={isLoading || !question.trim()}
                          >
                            <Send className="h-4 w-4" />
                            <span className="sr-only">Send</span>
                          </Button>
                        </form>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Insurance Types Section */}
        <section className="w-full py-12 md:py-24 bg-green-50 dark:bg-green-900/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
                  Insurance Types
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Understanding Crop Insurance
                </h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Learn about the different types of crop insurance available to protect your farm.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card className="border-green-100 dark:border-green-900 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="p-2 w-12 h-12 rounded-full bg-green-100 dark:bg-green-800/50 flex items-center justify-center mb-2">
                    <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle>Yield-Based Insurance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Protects against yield losses due to natural calamities, pests, and diseases. Compensation is based on the difference between guaranteed yield and actual yield.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-green-600">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-green-100 dark:border-green-900 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="p-2 w-12 h-12 rounded-full bg-green-100 dark:bg-green-800/50 flex items-center justify-center mb-2">
                    <Umbrella className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle>Weather-Based Insurance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Provides compensation based on adverse weather conditions like rainfall, temperature, and humidity that can impact crop growth and yield.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-green-600">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-green-100 dark:border-green-900 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="p-2 w-12 h-12 rounded-full bg-green-100 dark:bg-green-800/50 flex items-center justify-center mb-2">
                    <AlertTriangle className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle>Crop-Specific Insurance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Tailored insurance products designed for specific crops like coffee, tea, rubber, and spices with unique risk profiles and coverage needs.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-green-600">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">Benefits</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Insure Your Crops?</h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Crop insurance provides essential protection for your farming investment.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <Card className="border-green-100 dark:border-green-900 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="p-2 w-12 h-12 rounded-full bg-green-100 dark:bg-green-800/50 flex items-center justify-center mb-2">
                    <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle>Financial Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Protects your income against unpredictable weather events and other natural calamities that can destroy crops.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-green-100 dark:border-green-900 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="p-2 w-12 h-12 rounded-full bg-green-100 dark:bg-green-800/50 flex items-center justify-center mb-2">
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle>Loan Eligibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Improves your eligibility for agricultural loans as lenders prefer farmers with insurance coverage.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-green-100 dark:border-green-900 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="p-2 w-12 h-12 rounded-full bg-green-100 dark:bg-green-800/50 flex items-center justify-center mb-2">
                    <ArrowRight className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle>Risk Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Allows you to adopt new farming techniques and technologies with reduced financial risk.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-green-100 dark:border-green-900 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="p-2 w-12 h-12 rounded-full bg-green-100 dark:bg-green-800/50 flex items-center justify-center mb-2">
                    <Leaf className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle>Sustainable Farming</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Encourages sustainable farming practices by providing coverage for eco-friendly approaches.
                  </CardDescription>
                </CardContent>
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
                  Protect Your Farming Investment Today
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't let unpredictable weather and other risks threaten your livelihood. Get the right insurance coverage.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-white text-green-600 hover:bg-gray-100">Get Personalized Advice</Button>
                <Button variant="outline" className="border-white text-white hover:bg-green-700">
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
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
