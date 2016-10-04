
##h1 -install mongo
##h2 windows: 
    cmd: run powershell (at least v3)
    install scoop: iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
    allow commans: set-executionpolicy unrestricted -s cu
    install mongo: scoop install mongodb
    close and reopen cmd prompt
##h2 mac: 
    terminal: 
    install homebrew: /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    ??install ruby??: brew install ruby
    install mongodb: brew install mongodb

##h1 -make sure mongodb is running
    mongod --dbpath /path/to/folder/as/database
##h1 -open new cmd/terminal    
##h1 -make sure the current directory is /mean2

import
mongoimport --db tourOfHeroes --collection heroes --jsonArray "server/heroes.json" 
mongoimport --db tourOfHeroes --collection heroes --jsonArray "dump/heroes.json" 

export
mongoexport --db tourOfHeroes --collection heroes --jsonArray --pretty --out dump/heroes.json

