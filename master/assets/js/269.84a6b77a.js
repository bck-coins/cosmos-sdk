(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{829:function(e,t,a){"use strict";a.r(t);var s=a(1),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"setting-up-the-keyring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-keyring"}},[e._v("#")]),e._v(" Setting up the keyring")]),e._v(" "),a("p",{attrs:{synopsis:""}},[e._v("This document describes how to configure and use the keyring and its various backends for an "),a("RouterLink",{attrs:{to:"/basics/app-anatomy.html"}},[a("strong",[e._v("application")])]),e._v(".")],1),e._v(" "),a("p",[e._v('The keyring holds the private/public keypairs used to interact with a node. For instance, a validator key needs to be set up before running the blockchain node, so that blocks can be correctly signed. The private key can be stored in different locations, called "backends", such as a file or the operating system\'s own key storage.')]),e._v(" "),a("h2",{attrs:{id:"available-backends-for-the-keyring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#available-backends-for-the-keyring"}},[e._v("#")]),e._v(" Available backends for the keyring")]),e._v(" "),a("p",[e._v("Starting with the v0.38.0 release, Cosmos SDK comes with a new keyring implementation\nthat provides a set of commands to manage cryptographic keys in a secure fashion. The\nnew keyring supports multiple storage backends, some of which may not be available on\nall operating systems.")]),e._v(" "),a("h3",{attrs:{id:"the-os-backend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-os-backend"}},[e._v("#")]),e._v(" The "),a("code",[e._v("os")]),e._v(" backend")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("os")]),e._v(" backend relies on operating system-specific defaults to handle key storage\nsecurely. Typically, an operating system's credential sub-system handles password prompts,\nprivate keys storage, and user sessions according to the user's password policies. Here\nis a list of the most popular operating systems and their respective passwords manager:")]),e._v(" "),a("ul",[a("li",[e._v("macOS (since Mac OS 8.6): "),a("a",{attrs:{href:"https://support.apple.com/en-gb/guide/keychain-access/welcome/mac",target:"_blank",rel:"noopener noreferrer"}},[e._v("Keychain"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Windows: "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/windows/win32/secauthn/credentials-management",target:"_blank",rel:"noopener noreferrer"}},[e._v("Credentials Management API"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("GNU/Linux:\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://gitlab.gnome.org/GNOME/libsecret",target:"_blank",rel:"noopener noreferrer"}},[e._v("libsecret"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://api.kde.org/frameworks/kwallet/html/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("kwallet"),a("OutboundLink")],1)])])])]),e._v(" "),a("p",[e._v("GNU/Linux distributions that use GNOME as default desktop environment typically come with\n"),a("a",{attrs:{href:"https://wiki.gnome.org/Apps/Seahorse",target:"_blank",rel:"noopener noreferrer"}},[e._v("Seahorse"),a("OutboundLink")],1),e._v(". Users of KDE based distributions are\ncommonly provided with "),a("a",{attrs:{href:"https://userbase.kde.org/KDE_Wallet_Manager",target:"_blank",rel:"noopener noreferrer"}},[e._v("KDE Wallet Manager"),a("OutboundLink")],1),e._v(".\nWhilst the former is in fact a "),a("code",[e._v("libsecret")]),e._v(" convenient frontend, the former is a "),a("code",[e._v("kwallet")]),e._v("\nclient.")]),e._v(" "),a("p",[a("code",[e._v("os")]),e._v(" is the default option since operating system's default credentials managers are\ndesigned to meet users' most common needs and provide them with a comfortable\nexperience without compromising on security.")]),e._v(" "),a("h3",{attrs:{id:"the-file-backend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-file-backend"}},[e._v("#")]),e._v(" The "),a("code",[e._v("file")]),e._v(" backend")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("file")]),e._v(" backend more closely resembles the keybase implementation used prior to\nv0.38.1. It stores the keyring encrypted within the app's configuration directory. This\nkeyring will request a password each time it is accessed, which may occur multiple\ntimes in a single command resulting in repeated password prompts. If using bash scripts\nto execute commands using the "),a("code",[e._v("file")]),e._v(" option you may want to utilize the following format\nfor multiple prompts:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"IyBhc3N1bWluZyB0aGF0IEtFWVBBU1NXRCBpcyBzZXQgaW4gdGhlIGVudmlyb25tZW50CiQgZ2FpYWNsaSBjb25maWcga2V5cmluZy1iYWNrZW5kIGZpbGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICMgdXNlIGZpbGUgYmFja2VuZAokIChlY2hvICRLRVlQQVNTV0Q7IGVjaG8gJEtFWVBBU1NXRCkgfCBnYWlhY2xpIGtleXMgYWRkIG1lICAgICAgICAjIG11bHRpcGxlIHByb21wdHMKJCBlY2hvICRLRVlQQVNTV0QgfCBnYWlhY2xpIGtleXMgc2hvdyBtZSAgICAgICAgICAgICAgICAgICAgICAgICAgIyBzaW5nbGUgcHJvbXB0Cg=="}}),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[e._v("The first time you add a key to an empty keyring, you will be prompted to type the password twice.")])]),e._v(" "),a("h3",{attrs:{id:"the-pass-backend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-pass-backend"}},[e._v("#")]),e._v(" The "),a("code",[e._v("pass")]),e._v(" backend")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("pass")]),e._v(" backend uses the "),a("a",{attrs:{href:"https://www.passwordstore.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("pass"),a("OutboundLink")],1),e._v(" utility to manage on-disk\nencryption of keys' sensitive data and metadata. Keys are stored inside "),a("code",[e._v("gpg")]),e._v(" encrypted files\nwithin app-specific directories. "),a("code",[e._v("pass")]),e._v(" is available for the most popular UNIX\noperating systems as well as GNU/Linux distributions. Please refer to its manual page for\ninformation on how to download and install it.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[a("strong",[e._v("pass")]),e._v(" uses "),a("a",{attrs:{href:"https://gnupg.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GnuPG"),a("OutboundLink")],1),e._v(" for encryption. "),a("code",[e._v("gpg")]),e._v(" automatically invokes the "),a("code",[e._v("gpg-agent")]),e._v("\ndaemon upon execution, which handles the caching of GnuPG credentials. Please refer to "),a("code",[e._v("gpg-agent")]),e._v("\nman page for more information on how to configure cache parameters such as credentials TTL and\npassphrase expiration.")])]),e._v(" "),a("p",[e._v("The password store must be set up prior to first use:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBwYXNzIGluaXQgJmx0O0dQR19LRVlfSUQmZ3Q7Cg=="}}),e._v(" "),a("p",[e._v("Replace "),a("code",[e._v("<GPG_KEY_ID>")]),e._v(" with your GPG key ID. You can use your personal GPG key or an alternative\none you may want to use specifically to encrypt the password store.")]),e._v(" "),a("h3",{attrs:{id:"the-test-backend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-test-backend"}},[e._v("#")]),e._v(" The "),a("code",[e._v("test")]),e._v(" backend")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("test")]),e._v(" backend is a password-less variation of the "),a("code",[e._v("file")]),e._v(" backend. Keys are stored\nunencrypted on disk. This backend is meant for testing purposes only and "),a("strong",[e._v("should never be used\nin production environments")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"the-kwallet-backend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-kwallet-backend"}},[e._v("#")]),e._v(" The "),a("code",[e._v("kwallet")]),e._v(" backend")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("kwallet")]),e._v(" backend uses "),a("code",[e._v("KDE Wallet Manager")]),e._v(", which comes installed by default on the\nGNU/Linux distributions that ships KDE as default desktop environment. Please refer to\n"),a("a",{attrs:{href:"https://docs.kde.org/stable5/en/kdeutils/kwallet5/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("KWallet Handbook"),a("OutboundLink")],1),e._v(" for more\ninformation.")]),e._v(" "),a("h2",{attrs:{id:"adding-keys-to-the-keyring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-keys-to-the-keyring"}},[e._v("#")]),e._v(" Adding keys to the keyring")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",[e._v("Make sure you can build your own binary, and replace "),a("code",[e._v("simd")]),e._v(" with the name of your binary in the snippets.")])]),e._v(" "),a("p",[e._v("Applications developed using the Cosmos SDK come with the "),a("code",[e._v("keys")]),e._v(" subcommand. For the purpose of this tutorial, we're running the "),a("code",[e._v("simd")]),e._v(" CLI, which is an application built using the Cosmos SDK for testing and educational purposes. For more information, see "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/v0.40.0-rc3/simapp",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("simapp")]),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("You can use "),a("code",[e._v("simd keys")]),e._v(" for help about the keys command and "),a("code",[e._v("simd keys [command] --help")]),e._v(" for more information about a particular subcommand.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[e._v("You can also enable auto-completion with the "),a("code",[e._v("simd completion")]),e._v(" command. For example, at the start of a bash session, run "),a("code",[e._v(". <(simd completion)")]),e._v(", and all "),a("code",[e._v("simd")]),e._v(" subcommands will be auto-completed.")])]),e._v(" "),a("p",[e._v("To create a new key in the keyring, run the "),a("code",[e._v("add")]),e._v(" subcommand with a "),a("code",[e._v("<key_name>")]),e._v(" argument. For the purpose of this tutorial, we will solely use the "),a("code",[e._v("test")]),e._v(" backend, and call our new key "),a("code",[e._v("my_validator")]),e._v(". This key will be used in the next section.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBzaW1kIGtleXMgYWRkIG15X3ZhbGlkYXRvciAtLWtleXJpbmctYmFja2VuZCB0ZXN0CgojIFB1dCB0aGUgZ2VuZXJhdGVkIGFkZHJlc3MgaW4gYSB2YXJpYWJsZSBmb3IgbGF0ZXIgdXNlLgpNWV9WQUxJREFUT1JfQUREUkVTUz0kKHNpbWQga2V5cyBzaG93IG15X3ZhbGlkYXRvciAtYSAtLWtleXJpbmctYmFja2VuZCB0ZXN0KQo="}}),e._v(" "),a("p",[e._v("This command generates a new 24-word mnemonic phrase, persists it to the relevant backend, and outputs information about the keypair. If this keypair will be used to hold value-bearing tokens, be sure to write down the mnemonic phrase somewhere safe!")]),e._v(" "),a("p",[e._v("By default, the keyring generates a "),a("code",[e._v("secp256k1")]),e._v(" keypair. The keyring also supports "),a("code",[e._v("ed25519")]),e._v(" keys, which may be created by passing the "),a("code",[e._v("--algo ed25519")]),e._v(" flag. A keyring can of course hold both types of keys simultaneously, and the Cosmos SDK's "),a("code",[e._v("x/auth")]),e._v(" module (in particular its "),a("RouterLink",{attrs:{to:"/core/baseapp.html#antehandler"}},[e._v("AnteHandlers")]),e._v(") supports natively these two public key algorithms.")],1),e._v(" "),a("h2",{attrs:{hide:"",id:"next"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),a("p",{attrs:{hide:""}},[e._v("Read about "),a("RouterLink",{attrs:{to:"/run-node/run-node.html"}},[e._v("running a node")])],1)],1)}),[],!1,null,null,null);t.default=o.exports}}]);