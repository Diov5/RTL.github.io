import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, BookOpen, Users, Heart, Shield, Target } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-700 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
            <Heart className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-xl text-white">Reach the Light</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#guides" className="text-sm font-medium hover:text-blue-400 transition-colors text-gray-300">
            Video Guides
          </Link>
          <Link href="#articles" className="text-sm font-medium hover:text-blue-400 transition-colors text-gray-300">
            Articles
          </Link>
          <Link href="#support" className="text-sm font-medium hover:text-blue-400 transition-colors text-gray-300">
            Support
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-blue-400 transition-colors text-gray-300">
            About
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary" className="mb-4 bg-gray-700 text-gray-200 hover:bg-gray-600">
                  Recovery & Healing
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                  Your Journey to Freedom Starts Here
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Break free from PMO addiction with our comprehensive guides, supportive community, and proven recovery
                  strategies. You're not alone in this journey.
                </p>
              </div>
              <div className="space-x-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                >
                  Start Your Recovery
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 bg-gray-800/50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-400">10,000+</div>
                <p className="text-gray-400">People Helped</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-purple-400">95%</div>
                <p className="text-gray-400">Success Rate</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-green-400">24/7</div>
                <p className="text-gray-400">Support Available</p>
              </div>
            </div>
          </div>
        </section>

        {/* Video Guides Section */}
        <section id="guides" className="w-full py-12 md:py-24 bg-gray-900/50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Video Guides</h2>
              <p className="max-w-[600px] text-gray-300 md:text-lg">
                Step-by-step video guides to help you understand addiction and build healthy habits
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="relative aspect-video bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-lg flex items-center justify-center mb-4 border border-gray-700">
                    <Play className="w-12 h-12 text-blue-400" />
                  </div>
                  <CardTitle className="text-lg text-white">Understanding Addiction</CardTitle>
                  <CardDescription className="text-gray-400">
                    Learn the science behind addiction and why recovery is possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Watch Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="relative aspect-video bg-gradient-to-br from-green-900/50 to-blue-900/50 rounded-lg flex items-center justify-center mb-4 border border-gray-700">
                    <Target className="w-12 h-12 text-green-400" />
                  </div>
                  <CardTitle className="text-lg text-white">Building Healthy Habits</CardTitle>
                  <CardDescription className="text-gray-400">
                    Practical strategies to replace harmful behaviors with positive ones
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Watch Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="relative aspect-video bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-lg flex items-center justify-center mb-4 border border-gray-700">
                    <Shield className="w-12 h-12 text-purple-400" />
                  </div>
                  <CardTitle className="text-lg text-white">Relapse Prevention</CardTitle>
                  <CardDescription className="text-gray-400">
                    Tools and techniques to maintain your progress and prevent setbacks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Watch Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section id="articles" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Recovery Articles</h2>
              <p className="max-w-[600px] text-gray-300 md:text-lg">
                In-depth articles covering all aspects of recovery and personal growth
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-5 h-5 text-blue-400" />
                    <Badge variant="secondary" className="bg-gray-700 text-gray-200">
                      Recovery
                    </Badge>
                  </div>
                  <CardTitle className="text-white">The First 30 Days: What to Expect</CardTitle>
                  <CardDescription className="text-gray-400">
                    A comprehensive guide to navigating the first month of your recovery journey
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="p-0 h-auto text-blue-400 hover:text-blue-300">
                    Read Article →
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-5 h-5 text-green-400" />
                    <Badge variant="secondary" className="bg-gray-700 text-gray-200">
                      Wellness
                    </Badge>
                  </div>
                  <CardTitle className="text-white">Building Mental Resilience</CardTitle>
                  <CardDescription className="text-gray-400">
                    Strengthen your mind and develop coping strategies for long-term success
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="p-0 h-auto text-blue-400 hover:text-blue-300">
                    Read Article →
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-5 h-5 text-purple-400" />
                    <Badge variant="secondary" className="bg-gray-700 text-gray-200">
                      Relationships
                    </Badge>
                  </div>
                  <CardTitle className="text-white">Rebuilding Trust and Intimacy</CardTitle>
                  <CardDescription className="text-gray-400">
                    How to repair and strengthen relationships affected by addiction
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="p-0 h-auto text-blue-400 hover:text-blue-300">
                    Read Article →
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-5 h-5 text-orange-400" />
                    <Badge variant="secondary" className="bg-gray-700 text-gray-200">
                      Lifestyle
                    </Badge>
                  </div>
                  <CardTitle className="text-white">Creating a Healthy Daily Routine</CardTitle>
                  <CardDescription className="text-gray-400">
                    Structure your day for success with proven habits and routines
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="p-0 h-auto text-blue-400 hover:text-blue-300">
                    Read Article →
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section id="support" className="w-full py-12 md:py-24 bg-gray-900/50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">You're Not Alone</h2>
              <p className="max-w-[600px] text-gray-300 md:text-lg">
                Join our supportive community and get the help you need
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="text-center bg-gray-800 border-gray-700">
                <CardHeader>
                  <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <CardTitle className="text-white">Community Support</CardTitle>
                  <CardDescription className="text-gray-400">
                    Connect with others on the same journey in our safe, moderated forums
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Join Community
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center bg-gray-800 border-gray-700">
                <CardHeader>
                  <Heart className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <CardTitle className="text-white">Professional Help</CardTitle>
                  <CardDescription className="text-gray-400">
                    Access to qualified therapists and counselors specialized in addiction recovery
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Find Therapist
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center bg-gray-800 border-gray-700">
                <CardHeader>
                  <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <CardTitle className="text-white">Crisis Support</CardTitle>
                  <CardDescription className="text-gray-400">
                    24/7 crisis helpline for immediate support when you need it most
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Get Help Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-r from-blue-600 to-purple-700">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                Ready to Start Your Recovery?
              </h2>
              <p className="max-w-[600px] text-blue-100 md:text-lg">
                Take the first step towards freedom. Your journey to a healthier, happier life begins today.
              </p>
              <div className="space-x-4">
                <Button size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
                  Begin Recovery Program
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-blue-600"
                >
                  Download Resources
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-700 bg-gray-900">
        <p className="text-xs text-gray-400">
          © 2024 Reach the Light. All rights reserved. Your privacy and recovery matter to us.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-gray-300">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-gray-300">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-gray-300">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}
