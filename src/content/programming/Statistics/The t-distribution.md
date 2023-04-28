---
Title: T-Distribution
Date: 04/13/2023
Author: Sulav Jung Hamal
BookAuthor: Sulav Jung Hamal
Type: Class
Class: Probability_and_Statistics_with_Computing
slug: t-distribution
Genera: Data Science
Status: Planning 🔗
Due_Date: 04/13/2023
Cover_Image: https://source.unsplash.com/9DaOYUYnOls/1320x400
Description: How is the t-distribution used to make inferences about population means? Learn more about the practical applications of t-distribution in daily life.
Tag:
  - class
---

# T-distribution

The **t-distribution** is used in the estimation of the mean of a normally distributed population when the sample size is small. It provides a better estimate of the standard error of the mean than the normal distribution when the sample size is small. The t-distribution is used to calculate a t-statistic, which is compared to a critical value from the t-distribution to test hypotheses about the population mean.

The class of 𝑡 distributions (or 𝑇 distributions) are all bell shaped functions with mean zero, but higher variance than the standard normal. A 𝑡 distribution is characterized by a whole number index called the number of “ degrees of freedom” or “df”, which. For instance $t_{55}$ means 𝑡 distribution with 55 degrees of freedom.

## Calculations related to T-Distribution.

There are several calculations related to the t-distribution:

1. **Probability density function (PDF)**: The PDF of the t-distribution is given by the formula:

   $$
   f(x) = [Gamma((df+1)/2)/(sqrt(df*pi)*Gamma(df/2))] * (1 + x^2/df)^(-(df+1)/2)
   $$

   where x is the value of the random variable, df is the degrees of freedom, and Gamma() is the gamma function.

2. **Cumulative distribution function (CDF)**: The CDF of the t-distribution cannot be expressed in a simple closed-form formula, but it can be calculated using software or tables. The CDF gives the probability that a random variable from the t-distribution is less than or equal to a given value.
3. **Critical values**: The t-distribution is used to calculate critical values for hypothesis tests and confidence intervals. The critical values are obtained from t-tables or calculated using software based on the specified degrees of freedom and significance level.
4. **Confidence intervals**: The t-distribution is used to construct confidence intervals for the population mean when the sample size is small. The formula for a 95% confidence interval is:
   $$
   x̄ ± tα/2,s/√n
   $$
   where x̄ is the sample mean, s is the sample standard deviation, n is the sample size, and tα/2 is the critical value from the t-distribution with (n-1) degrees of freedom and significance level α/2.
5. **Hypothesis testing**: The t-distribution is used to test hypotheses about the population mean when the population standard deviation is unknown and the sample size is small. The t-statistic is calculated as:

   $$
   \large t = \frac{x̄ - μ}{(s/√n)}
   $$

   where $x̄$ is the sample mean, μ is the hypothesized population mean, s is the sample standard deviation, and n is the sample size. The t-statistic follows a t-distribution with (n-1) degrees of freedom. The null hypothesis is rejected if the calculated t-statistic is greater than the critical value from the t-distribution with (n-1) degrees of freedom and significance level α.
