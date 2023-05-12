---
Title: Linear Combination of Random Variables
Date: 2023/04/13
Author: Sulav Jung Hamal
BookAuthor: Sulav Jung Hamal
Type: 💻 Programming
slug: linear_combination_of_random_variables
Genera: Data Science 
Status: Planning 🔗
Due_Date: 04/13/2023
Cover_Image: https://source.unsplash.com/9DaOYUYnOls/1320x400
Description: A linear combination of random variables is a new random variable that is formed by taking a weighted sum of two or more other random variables.
Tag:
  - Article
---

# What is Linear Combination of Random Variables?
**A linear combination of random variables is a new random variable that is formed by taking a weighted sum of two or more other random variables.**

Let's suppose we have random variables $\large X_{1},X_{2},\dots,X_{n}$. Now, we are given means and variances as such: 
$$Means: \large \mu_{1},\mu_{2},\dots,\mu_{n}$$
$$Variances: \large \sigma_{1}^2,\sigma_{2}^2, \dots, \sigma_{n}^2$$
Then, linear combination gives us:
#### Expected Value:
$$\large E(c_{1}X_{1}+c_{2}X_{2}+\dots+c_{n}X_{n}) = c_{1}\mu_{1} +c_{n}\mu_{n} +\dots+c_{n}\mu_{n}$$
#### Variance (If independent):
$$\large Var(c_{1}X_{1}+c_{2}X_{2}+\dots+c_{n}X_{n}) = c_{1}^2\sigma_{1}^2 +c_{2}^2\sigma_{2}^2 +\dots+c_{n}^2\sigma_{n}^2   $$
#### Variance (if Dependent Event): 
$$\large\sum^{n}_{i=1}\sum^{n}_{j=1}c_{i}c_{j}COV(X_{i}X_{j})$$

This is what we will learn in this note. Why it is true and how it can be used in different practical fields. Let's dive in. 

---
## Where do we use it? || Practical Use of this Concept 
Linear combinations of random variables can come in handy in many different situations. Here are a few examples:
1.  ***Portfolio optimization:*** In finance, investors often want to construct a portfolio of assets that maximizes their expected return while minimizing their risk. To do this, they can use linear combinations of asset returns to create a diversified portfolio with a desired level of risk and return.
2.  ***Image processing:*** In image processing, linear combinations of pixel values can be used to create new images with specific properties. For example, in image compression, a linear combination of basis images can be used to approximate the original image with fewer pixels.
3.  ***Machine learning:*** In machine learning, linear combinations of features can be used to create new features that capture important relationships between the original features. This can improve the performance of models by reducing the number of features and increasing their predictive power.
4.  ***Statistical modeling:*** In statistical modeling, linear combinations of predictor variables can be used to create models that capture the relationship between the predictors and the response variable. For example, in regression analysis, a linear combination of predictors can be used to model the relationship between a response variable and one or more predictor variables.
5.  ***Signal processing:*** In signal processing, linear combinations of signals can be used to filter out noise or extract important information from noisy data. For example, in speech recognition, a linear combination of spectral features can be used to recognize spoken words in noisy environments.
These are just a few examples of how linear combinations of random variables can be used in different fields. The concept is quite versatile and can be applied to many different problems, making it a powerful tool for understanding complex systems and analyzing data.

---
> **Suppose you load weights $F_{1}, F_{2}$ on opposite sides of a beam at distances 10, 7 from a fulcrum. For the load to be perfectly balanced, we need $7F_{2}= 10F_{1}$. So, we might measure the net torque about the fulcrum**
> $$
>T = 10F_{1} - 7F_{2}
>$$
>**Assume the forces are random variables: $F_{1}$ mean 35 and standard deviation 2 lbs and $F_{2}$ has mean 50 and standard deviation 3 lbs. Then linearity of expectation shows the mean of T is zero. But variance?** 
> - **This is linear combination of $F_{1}, F_{2}$ with coefficients $c_{1} = 10, c_{2} = -7$**

Case 1: The forces are applied INDEPENDENTLY so that $COV(F_{1}, F_{2}) = 0$ 
