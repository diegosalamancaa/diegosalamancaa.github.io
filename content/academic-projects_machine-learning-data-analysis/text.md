#

Machine Learning & Data Analysis

###

CIS 5450- Big Data Analytics (Graduate)

I built an end-to-end machine learning and data analytics pipeline in CIS 5450 to test whether Middle East geopolitical conflict signals could predict next-day WTI crude oil returns. My team integrated ACLED armed-conflict event data with WTI futures prices into a 50,175-row country-day panel across 15 countries and 3,349 trading days, then engineered lagged oil returns, event counts, fatalities, event-type indicators, oil-infrastructure mentions, country fixed effects, and day-of-week controls. We evaluated OLS, Ridge, Lasso, Random Forest, Gradient Boosting, and classification models using chronology-safe splits, MAE/RMSE, R2R^2R2, directional accuracy, AUC, permutation testing, feature importance, and bootstrap confidence intervals. The project’s main technical takeaway was that lagged oil-return structure dominated the feature space, while conflict-based predictors showed weak and statistically unconfirmed signal; Gradient Boosting reached about 50.5% directional accuracy, but its confidence interval overlapped the 50% baseline.

Beyond the final project, CIS 5450 gave me practical exposure to the full modern data analytics stack: relational modeling and schema design, SQL/DuckDB query optimization, Pandas and Polars-style dataframe workflows, distributed computation, Spark, MapReduce, partitioning, replication, joins at scale, Bloom filters, hashing, NoSQL tradeoffs, and model evaluation. The course emphasized how data systems choices affect analytics and ML performance: when to normalize versus denormalize, how lazy/query-planned execution differs from eager dataframe execution, why distributed systems introduce communication and fault-tolerance overhead, and how specialized stores like key-value, document, search, vector, and columnar systems trade flexibility for speed. It connected model-building with the surrounding infrastructure needed to clean, store, query, scale, and validate real datasets.

###

a

###

CIS 5190 - Applied Machine Learning (Graduate)

I built a news-source classification system for a CIS 5190 machine learning project, predicting whether short headlines came from NBC or Fox News using a cleaned dataset of 3,799 examples. I designed the full NLP pipeline: preprocessing raw headline data, extracting labels from URLs, removing duplicates/noise, and comparing feature/model choices across TF-IDF logistic regression, SVM/SGD classifiers, random forests, MLPs on SVD-reduced features, soft-voting/stacking ensembles, and fine-tuned BERT. The final model used high-dimensional hashed word and character TF-IDF features with separate normalization and a linear SVM-style classifier exported as a PyTorch checkpoint, reaching 84.3% test accuracy, achieving top 10% in the class, and outperforming BERT on a small, style-heavy dataset. The main technical insight was that character-level features captured source-specific tone, formatting, and phrasing better than deeper models trained on limited data.

Beyond the project, my CIS 5190 work gave me hands-on experience across the ML stack: implementing and analyzing supervised models such as linear/logistic regression, regularization, gradient descent, neural networks, and evaluation through train/validation/test splits; working with nonparametric methods like kNN, decision trees, random forests, bagging, boosting, and gradient-boosted trees; and studying deep learning architectures for vision and sequence modeling, including CNNs, RNNs, attention, and transformers. I also worked through unsupervised learning and dimensionality reduction concepts such as K-means and PCA, plus reinforcement learning ideas including MDPs, value functions, Q-learning, policy methods, and exploration. Overall, the course gave me practical experience moving from theory to implementation: choosing model families, designing losses, tuning optimization/regularization, engineering features, benchmarking alternatives, and interpreting why one model generalizes better than another.

###

aa

###

ESE 2030 - Linear Algebra & Applications of Artificial Intelligence

###

Latent Semantic Analysis (LSA)

I utilized Latent Semantic Analysis to analyze the patterns of every U.S. presidential inaugural address. I analyzed the full set of U.S. inaugural speeches by turning each text into TF-IDF features so meaningful words stand out over common ones, then used Truncated Singular Value Decomposition (Latent Semantic Analysis) to compress thousands of terms into a small set of interpretable themes. I started with a 2-D embedding to visualize how speeches group together and labeled the plot to show clear clusters by era, then expanded to a 10-D representation to get a more reliable measure of similarity and built a document-to-document correlation heatmap. Along the way I read the model by inspecting the top-weighted words for each component, translating those loadings into plain-language themes. This project exercised practical skills in text preprocessing (stop-word removal, sparse matrices), feature engineering (TF-IDF), dimensionality reduction (Truncated SVD), and model interpretation. I also focused on evaluation choices—recognizing when 2 dimensions help with storytelling and when higher dimensions are needed for fair comparisons.

###

aa

###

aa

###

aa

###

K-means & PCA analysis on breast cancer dataset

###

Trained Tree Classifier

###

aa

###

aa

###

aa

###

Neural Net Soccer Classifier

I built a small end-to-end ML project that classifies synthetic soccer players into positions using a neural network built from scratch. I generated a 1,500-row dataset with position-specific attribute distributions (pace, shooting, passing, dribbling, defending, physicality), then preprocessed with label encoding, train/test split, and feature standardization. The model uses ReLU hidden layers and a softmax output, trained via mini-batch gradient descent with cross-entropy; I ran a learning-rate sweep (0.01, 0.05, 0.1) to study convergence and generalization. I tracked training/validation loss and accuracy over 50 epochs, compared final test accuracies across LRs, plotted a confusion matrix to see where positions are confused, and visualized first-layer weights plus a simple feature-importance proxy. This exercised practical skills in data generation and preprocessing, vectorized forward/backprop math (matrix multiplies, Jacobian-wise derivatives for ReLU/softmax-CE), hyperparameter experimentation, and results communication with clear plots. Key takeaways: standardization and a sensible learning rate are crucial for stable training; confusion matrices surface realistic class overlaps (e.g., Mids vs Forwards); and weight initialization/optimizers and light regularization would further improve stability and accuracy. Additionally, the lowest figure depicts a basic SVD vector representation applied to this project.
