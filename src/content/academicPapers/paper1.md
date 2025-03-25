---
Type: Activity
slug: denoising-diffusion-probabilistic-models
Title: Denoising Diffusion Probabilistic Models
tags:
  - Diffusion
  - Models
  - Generative
  - Models
  - Image
  - Synthesis
  - AcademicPaper
Description: High-quality image synthesis using diffusion probabilistic models, with connections to denoising score matching and Langevin dynamics.
Author: Jonathan Ho, Ajay Jain, Pieter Abbeel
Date: 2025/03/18
Journal: 34th Conference on Neural Information Processing Systems (NeurIPS 2020)
Research_Field: Machine Learning
---

## Review: Denoising Diffusion Probabilistic Models

"Denoising Diffusion Probabilistic Models" by Jonathan Ho, Ajay Jain, and Pieter Abbeel introduces a compelling advancement in generative modeling. The paper explores diffusion probabilistic models—latent variable models inspired by nonequilibrium thermodynamics—that progressively transform noise into high-quality images. Trained on a weighted variational bound, these models leverage a novel link between diffusion processes, denoising score matching, and Langevin dynamics, achieving impressive results like an Inception score of 9.46 and a state-of-the-art FID score of 3.17 on CIFAR10.

What I found particularly nice about this paper is its elegant bridge between theoretical concepts and practical outcomes. The idea of reversing a noise-adding diffusion process to generate images feels intuitive yet powerful, and the authors’ clear explanation of this Markov chain process made it accessible despite its complexity. I liked this paper for its balance of innovation and rigor—it not only pushes the boundaries of image synthesis but also ties diffusion models to existing frameworks like score matching, offering a fresh perspective on generative modeling. The visual results, like the CelebA-HQ and LSUN samples, are stunning, and the open-source implementation at [GitHub](https://github.com/hojonathanho/diffusion) is a bonus for anyone eager to experiment.

https://arxiv.org/pdf/2006.11239


That is something that could be done and something that isn't mentioned on the paper above. That you need to understand it on your own. 