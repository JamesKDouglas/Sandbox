/** @type {import('next').NextConfig} */

  // const isDev = process.env.NODE_ENV === 'development' ? true : false;

  // const contentSecurityPolicyDirectiveScriptSrcValues = isDev
  // ? [`'unsafe-eval'`]
  // : [`'self'`];

  //next.js uses inline css styles during development. Because Webpack uses eval(), this triggers a content security alarm. We can deal with that by allowing inline code during development.

  //I could either set the content header here manually while developing then change it before building, or use an environment variable in the node command when the server is started. Then sense the variable - is it dev or production?    

  //To set the variables, put a second command in the script in package.json.
  //   to the start dev script add a line,  export NODE_ENV=dev && 
  // And to the start build script export NODE_ENV = production &&
  // then sense those environment variables here with sys.env.NODE_ENV  and have an if statement that makes the http headers with the correct content security policy.  
const nextConfig = {
    async headers() {
        return [
          {
            source: '/',
            headers: [
              {
                key: 'Content-Security-Policy',
                value: 'script-src "unsafe-inline"',
              },
            ],
          },
        ]
      },
};

module.exports = nextConfig;
