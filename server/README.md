
-install mongo
windows: cmd: run powershell (at least v3)
    install scoop: iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
    allow commans: set-executionpolicy unrestricted -s cu
    install mongo: scoop install mongodb
    close and reopen cmd prompt
mac: terminal: 
    install homebrew: /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    ??install ruby??: brew install ruby
    install mongodb: brew install mongodb

-make sure mongodb is running
    mongod --dbpath /path/to/folder/as/database
-open new cmd/terminal    
-make sure the current directory is /mean2

import
mongoimport --db tourOfHeroes --collection heroes --jsonArray "server/heroes.json" 
mongoimport --db tourOfHeroes --collection heroes --jsonArray "dump/heroes.json" 

export
mongoexport --db tourOfHeroes --collection heroes --jsonArray --pretty --out dump/heroes.json
