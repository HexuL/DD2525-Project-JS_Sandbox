



**1.Principle of the vulnerability:** 

This vulnerability exists in vm module. This vulnerability enables an attacker to commit RCE attack from vm by setting a getter triggered when trying to read it.



**2.How to use this package?**

At first we publish these npm packages, but we think these packages are malicious, just publish on npm is not suitable. So we deleted these packages and publish them here. You can use them for study Javascript sandbox, but don't use them to run the real malicious code. To use this package, you need to download, import and execute it using `require("proxy_getter_quan");`.

**3.Output and security:**

This npm package is created solely for studying sandbox escape techniques. In console, it will print expected output and the real output.

**4.Code Source:**
https://gist.github.com/jcreedcmu/4f6e6d4a649405a9c86bb076905696af
