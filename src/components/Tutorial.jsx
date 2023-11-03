import React from 'react'
import {Navbar , Footer} from './'

const Tutorial = () => {
  return (
    <div className=' min-h-screen gradient-bg-common '>
      <Navbar />
  
        <div className=" text-white min-h-screen m-20 p-6 white-glassmorphism">
            <section id="introduction" className="container mx-auto mt-8 blue-glassmorphism p-4">
                <h1 className="text-3xl font-bold mb-4">🚀 Welcome to ChainProof - Where Your Documents Soar Amongst the Stars 🚀</h1>
                <p className="text-gray-300">
                    Prepare for an interstellar journey with ChainProof! Beyond being an app, we're a gateway to a cosmos where Metamask and Ethereum align, conjuring a symphony of security and style to redefine your approach to document verification.
                </p>
            </section>

           <section id="prerequisites" className="container mx-auto my-8 blue-glassmorphism p-4">
                <h2 className="text-xl font-semibold mb-2">🔮 Prerequisites:</h2>
                <p className="text-gray-300">
                    Equip yourself with the tools of cosmic exploration:
                </p>
                <ul className="list-disc pl-6">
                    <li>Metamask, your warp-drive to the web3 universe. Get it from <a href="https://metamask.io/" className="text-blue-300 hover:underline">Metamask's Official Website</a>.</li>
                    <li>An Ethereum wallet synced with Metamask, laden with Ether (ETH) to fuel your intergalactic transactions.</li>
                </ul>
            </section>

            <section id="getting-started" className="container mx-auto my-8 blue-glassmorphism p-4">
                <h2 className="text-xl font-semibold mb-2">🚀 Getting Started:</h2>
                <ol className="list-decimal pl-6">
                    <li>Launch into the beyond via the official ChainProof portal. It's not just a website; it's your portal to the cosmos of secure document verification.</li>
                    <li>Initiate liftoff by tapping "Connect Metamask" on the homepage. Your wallet connects like a celestial beacon to the Ethereum constellation.</li>
                    <li>Navigate like a starship commander! With Metamask as your co-pilot, chart courses to Upload, View, Profile, Tutorial, and Login - your astral waypoints.</li>
                </ol>
            </section>

            <section id="upload" className="container mx-auto my-8 blue-glassmorphism p-4">
                <h2 className="text-xl font-semibold mb-2">📤 Uploading a Document:</h2>
                <ol className="list-decimal pl-6">
                    <li>Unlock the mysteries of "Upload," the launchpad for your documents to traverse the galaxies of validation.</li>
                    <li>Infuse life into your document via the "Select Document" button. Your journey ignites like a supernova.</li>
                    <li>Compose your document's odyssey: Craft a title and description that resonate through cosmic waves.</li>
                    <li>Ignite cosmic engines with "Upload." The countdown to document stardom commences.</li>
                    <li>Celestial authentication: Metamask summons your signature, affirming your role in this cosmic narrative. Sign and become part of the cosmic fabric.</li>
                    <li>🌌 Behold! Your document is now a radiant star within the blockchain cosmos, primed for verification.</li>
                </ol>
            </section>

            <section id="view" className="container mx-auto my-8 blue-glassmorphism p-4">
                <h2 className="text-xl font-semibold mb-2">🔍 Viewing Documents:</h2>
                <ol className="list-decimal pl-6">
                    <li>Glide into the "View" cosmos - a realm of celestial scrolls.</li>
                    <li>Shape celestial bodies with filters: Title, date, or type. You sculpt the galaxies of your exploration.</li>
                    <li>Unveil cosmic truths by selecting a document, tracing its luminescent steps embedded within the blockchain nebula.</li>
                </ol>
            </section>

            <section id="profile" className="container mx-auto my-8 blue-glassmorphism p-4">
                <h2 className="text-xl font-semibold mb-2">💼 Managing Your Profile:</h2>
                <ol className="list-decimal pl-6">
                    <li>Emerge within the "Profile" nebula, where your digital constellation takes shape.</li>
                    <li>Sculpt your cosmic aura - reshape your display name, contact details, and leave a meteoric impact on the digital canvas.</li>
                    <li>Govern your constellation of documents - a universe of knowledge waiting for your cosmic stewardship.</li>
                </ol>
            </section>

            <section id="tutorial" className="container mx-auto my-8 blue-glassmorphism p-4">
                <h2 className="text-xl font-semibold mb-2">📘 Using the Tutorial Page:</h2>
                <ol className="list-decimal pl-6">
                    <li>Step onto the cosmic tutorial launchpad via the "Tutorial" stargate.</li>
                    <li>Unearth enlightenment through step-by-step guides, each a cosmic guide illuminating the paths of document verification, profile mastery, and beyond.</li>
                </ol>
            </section>

            <section id="logging-in" className="container mx-auto my-8 blue-glassmorphism p-4">
                <h2 className="text-xl font-semibold mb-2">🔐 Logging In</h2>
                <ol className="list-decimal pl-6">
                    <li>Reenter the cosmic dance through the "Login" wormhole.</li>
                    <li>Metamask beckons, inviting you to authenticate. Accept the cosmic invitation and reclaim your digital sovereignty.</li>
                </ol>
            </section>

            <section id="congratulations" className="container mx-auto my-8 blue-glassmorphism p-4">
                <h2 className="text-xl font-semibold mb-2">🎉 Congratulations!</h2>
                <p className="text-gray-300">
                    You've decoded the cosmic cipher of ChainProof, where document verification becomes a starry symphony within the Ethereum galaxies. Elevate your document journey, navigate the blockchain cosmos, and celebrate the extraordinary odyssey of ChainProof!
                </p>
            </section>

        </div>
      <Footer />
    </div>
  )
}

export default Tutorial