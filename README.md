# [tombalough.com](http://tombalough.com) 

This is a personal website where I play with web development and publish projects. 


## Dependencies

Tested with:

* node >= v8, v9, v10, v11, v12
* Recommend [nvm](https://github.com/creationix/nvm#installation) for managing node versions

## Set up

You may wish to fork this repository or remove my remote origin and add your own. Go [here](https://help.github.com/articles/changing-a-remote-s-url/) for more information on changing remotes.  

1. To download the repository and install dependencies, run the following commands:

    ```bash
    git clone git://github.com/mldangelo/personal-site.git
    cd personal-site
    npm install
    ```

    If you do not have `yarn` installed, you may run `npm install` instead.

2. Next, you should create a `.env` file. To do this, run:

    ```bash
    cp sample.env .env
    ```

    and set values as appropriate. Most people will not need to make changes.

3. Run the following command to build the react application and serve it with hot module reloading:

    ```bash
    npm run dev
    ```

    Navigate to `<ip>:<port>` default: [http://localhost:8000](http://localhost:8000) to view my website.

    This completes set up instructions. Please continue reading to learn how to modify this site to make it your own.


## Deploying to Github Pages

1. Change `NODE_ENV` to `production` in `.env`
2. Run `npm run deploy`

That's it.

Please feel free to reach out to me by filing an issue or at [help@mldangelo.com](mailto:help@mldangelo.com) for help configuring your project.

## Contributors

* [@mldangelo](https://github.com/mldangelo)
* [@typpo](https://github.com/typpo)
* [@notrueblood](https://github.com/notrueblood)

## Acknowledgements

* App template forked from [@mldangelo](https://github.com/mldangelo)

## License

[MIT](https://github.com/mldangelo/personal-site/blob/master/LICENSE)
