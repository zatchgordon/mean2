
## 1 install mongo
###windows: 
    open cmd prompt
    run powershel: powershell
    install scoop: iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
    allow permissions: set-executionpolicy unrestricted -s cu
    install mongo: scoop install mongodb
    close and reopen cmd prompt
### mac: 
    open terminal
    install homebrew: /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    ??install ruby??: brew install ruby
    install mongodb: brew install mongodb

## 2 make sure mongodb is running
    mongod --dbpath /path/to/folder/as/database
## 3 open new cmd/terminal    
## 4 make sure the current directory is /mean2

## 5 import data
##import:
`mongoimport --db tourOfHeroes --collection heroes --jsonArray "server/heroes.json"`
#### or if there is dumped data
`mongoimport --db tourOfHeroes --collection heroes --jsonArray "dump/heroes.json"`

##export:
`mongoexport --db tourOfHeroes --collection heroes --jsonArray --pretty --out dump/heroes.json`

