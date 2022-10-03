# What are we going to learn?

You will learn about Web Storage. Web Storage provides mechanisms for web applications to save data in people's browsers.

Before HTML 5, applications had to save local data in cookies, which were sent to the server with each browser request. Web Storage is more secure and has the ability to save a larger amount of data without affecting page performance.

Unlike Cookies, the storage limit is much higher (at least 5MB), and information is not transferred to the server during requests.

Web Storage is per origin (per domain and protocol). All pages in a source can save and access the same data. For example, if domain betrybe.com saves data X in Web Storage, domain course.betrybe.com can read data X.